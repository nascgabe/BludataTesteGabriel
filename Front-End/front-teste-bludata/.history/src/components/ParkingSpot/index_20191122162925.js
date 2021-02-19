import React, { useEffect } from "react";
import {
  makeStyles,
  TextField,
  Paper,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Checkbox
} from "@material-ui/core";
import api from "../../Services/Api";
import { Switch,
  FormControlLabel
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Botao from "../Buttons/envioformulario";
import { textAlign } from "@material-ui/system";
import styles from "./styles.css";
import { type } from "os";
import ButtonSolicitar from "../Buttons/solicitar";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  default: {
    width: 600,
    height: 570,
    margin: "auto",
    marginTop: 10,
    textAlign: "center",
    textAlignLast: "center",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1
  },

  defaultBox: {
    width: 400
  },

  plateBox: {
    width: 400,
    textAlign: "center",
    textAlignLast: "center"
  }
}));

export default function NewParkingSpot() {
  const classes = useStyles();
  const [brandList, setBrandList] = React.useState([]);
  const [modelList, setModelList] = React.useState([]);
  const [colorList, setColorList] = React.useState([]);
  const [typeList, setTypeList] = React.useState([]);
  const [termsOfUse, setTermsOfUse] = React.useState([]);
  const [isBicycleOrScooter, setIsBicycleOrScooter] = React.useState(false);

  const solicitar = () => {
    return api
      .post("https://localhost:44347/api/parkingspot", values)
      .then(res => {
        alert(res.data.message) 
        window.location.reload();
      })
      .catch(res => {
        setErros(res.response.data);
      });
  };

  useEffect(() => {
    const fetchTypes = async () => {
      const response = await fetch("https://localhost:44347/api/vehicletypes")
        .then(res => res.json())
        .then(data => {
          setTypeList(data);
        });
      return response;
    };
    fetchTypes();
  }, []);

  const fetchBrandsByType = async vehicleType => {
    const response = await fetch(
      "https://localhost:44347/api/vehiclebrand/" + vehicleType
    )
      .then(res => res.json())
      .then(data => {
        setBrandList(data);
      });

    if (vehicleType == 3 || vehicleType == 4) {
      setIsBicycleOrScooter(true);
    }
  };

  const fetchModelsByBrandId = async vehicleBrandId => {
    const response = fetch(
      "https://localhost:44347/api/vehiclemodel/byid/" + vehicleBrandId
    )
      .then(res => res.json())
      .then(data => {
        setModelList(data);
      });
  };

  useEffect(() => {
    const fetchColors = async () => {
      const response = await fetch("https://localhost:44347/api/vehiclecolor")
        .then(res => res.json())
        .then(data => {
          setColorList(data);
        });
      return response;
    };
    fetchColors();
  }, []);
  useEffect(() => {
    const fetchTermScreen = async => {
      const response = fetch("https://localhost:44347/api/termsofuse")
        .then(res => res.json())
        .then(data => {
          console.log(data[0])
          setTermsOfUse(data[0]);
        });
      return response;
    };
    fetchTermScreen();
  }, []);

  const [values, setValues] = React.useState({
    userId: "",
    vehiclePlate: "",
    vehicleType: "",
    vehicleModelId: "",
    vehicleBrandId: "",
    vehicleColor: "",
    termsOfUseId: "",
    termsOfUseAccepted: false
  });

  const [erros, setErros] = React.useState({});

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleVehicleTypeChange = name => event => {
    setValues({ ...values, vehicleType: event.target.value });
    fetchBrandsByType(event.target.value);
    setIsBicycleOrScooter(false);
  };
  
  const handleVehicleModelChangeByBrand = name => event => {
    setValues({ ...values, vehicleBrandId: event.target.value });
    fetchModelsByBrandId(event.target.value);
  };

  const handleTemsOfUse = () => {
    setValues({ ...values, termsOfUseId:  termsOfUse.termsOfUseId});
    handleClose();
  };
  const showErrorText = name => {
    let errorText = erros[name];
    if (errorText) return errorText[0];
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    let termsOfUseAccepted = !values.termsOfUseAccepted;
    setValues({ ...values, termsOfUseAccepted: termsOfUseAccepted });
    if (termsOfUseAccepted) {
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container maxWidth="lg">
      <form noValidate autoComplete="off">
        <div>
          <Paper className={classes.default}>
            {/* <div className="usuario">
              {" "}
              <h2>Usuário </h2> {values.userId}{" "}
            </div> */}
            <div>
              <TextField
                className="defaultBox"
                id="vehycleTypeField"
                select
                label="Tipo de veículo"
                error={erros.Name !== undefined}
                value={setValues.vehicleType}
                onChange={handleVehicleTypeChange("vehicleType")}
                helperText={showErrorText("VehicleType")}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: ""
                  }
                }}
                margin="normal"
                variant="outlined"
              >
                {typeList.map(option => (
                  <option key={option.vehicleType} value={option.vehicleTypeId}>
                    {option.vehicleType}
                  </option>
                ))}
              </TextField>
            </div>

            <div>
              <TextField
                className="defaultBox"
                disabled={isBicycleOrScooter}
                id="fieldPlate"
                label="Placa"
                placeholder="Digite sua placa"
                value={values.vehiclePlate}
                onChange={handleChange("vehiclePlate")}
                margin="normal"
                variant="outlined"
              />
            </div>

            <div>
              <TextField
                className={classes.plateBox}
                disabled={isBicycleOrScooter}
                id="vehicleBrand"
                select
                label="Marca"
                error={erros.Name !== undefined}
                value={setValues.vehicleBrand}
                onChange={handleVehicleModelChangeByBrand("vehicleBrand")}
                helperText={showErrorText("vehicleBrand")}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: ""
                  }
                }}
                margin="normal"
                variant="outlined"
              >
                {brandList.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.description}
                  </option>
                ))}
              </TextField>
            </div>

            <div>
              <TextField
                className="defaultBox"
                disabled={isBicycleOrScooter}
                id="vehicleModel"
                select
                label="Modelo"
                error={erros.Name !== undefined}
                value={setValues.vehicleModel}
                onChange={handleChange("vehicleModelId")}
                helperText={showErrorText("vehicleModel")}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: ""
                  }
                }}
                margin="normal"
                variant="outlined"
              >
                {modelList.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.description}
                  </option>
                ))}
              </TextField>
            </div>

            <div>
              <TextField
                className="defaultBox"
                disabled={isBicycleOrScooter}
                id="vehicleColor"
                select
                label="Cor"
                error={erros.Name !== undefined}
                value={setValues.vehicleColor}
                onChange={handleChange("vehicleColor")}
                helperText={showErrorText("vehicleColor")}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: ""
                  }
                }}
                margin="normal"
                variant="outlined"
              >
                {colorList.map(option => (
                  <option key={option.colorName} value={option.colorId}>
                    {option.colorName}
                  </option>
                ))}
              </TextField>
            </div>
            <div>
              <Checkbox
                size="small"
                color="primary"
                onClick={handleClickOpen}
              ></Checkbox>
              Aceito os termos de uso.
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Termos de uso"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText
                    style={{ textAlign: "justify" }}
                    id="alert-dialog-description"
                  >
                        {termsOfUse.TermsOfUseText}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => handleTemsOfUse()}
                  >
                    <ThumbUpAltIcon />
                    Entendi
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            <div style={{ height: "10px" }}></div>
            <div>
              <ButtonSolicitar
                onClick={() => solicitar()}
              ></ButtonSolicitar>
            </div>
          </Paper>
        </div>
      </form>
    </Container>
  ); 
}

