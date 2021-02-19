import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<Container maxWidth="xl">
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipiscing elit, cursus
								in cubilia vehicula habitasse curabitur quam taciti, inceptos
								nisl fermentum tortor conubia suscipit. Tempor auctor vehicula
								maecenas bibendum adipiscing mattis elementum nisi, arcu netus
								aliquam himenaeos sed erat interdum senectus, hac sollicitudin
								proin magnis litora vivamus ad. Felis adipiscing elementum dui
								imperdiet turpis dictumst gravida velit parturient cras donec
								etiam et convallis ex faucibus, egestas taciti arcu hac augue a
								inceptos neque quisque nisl natoque posuere mattis mi laoreet.
								Dui est habitasse odio turpis a tempor, posuere elit donec
								tincidunt. Et purus maximus scelerisque malesuada nibh, morbi
								arcu platea vehicula cubilia nullam, urna maecenas viverra
								magnis. Primis gravida diam imperdiet nullam dapibus fermentum
								auctor leo consequat velit vehicula, commodo lectus amet nostra
								mi sollicitudin a habitant at facilisis.
							</p>

							<p>
								Auctor facilisi odio nulla lorem tristique class felis euismod
								hendrerit senectus placerat pharetra tempor vitae sagittis,
								vulputate tempus accumsan faucibus penatibus vehicula ad turpis
								dolor varius platea laoreet urna. Libero diam gravida tempor
								ullamcorper in mus convallis, felis pretium porttitor ad rutrum
								quis etiam, lacinia suspendisse iaculis sagittis nostra
								dignissim. Parturient accumsan pellentesque duis curae congue
								non mi convallis, fusce eleifend risus vehicula diam potenti
								ridiculus ut, molestie turpis magnis lectus malesuada aptent eu.
								Ut tempus semper arcu platea dignissim posuere justo
								scelerisque, molestie enim ullamcorper rhoncus potenti
								facilisis. Tortor congue sem euismod risus viverra maecenas eu
								metus, litora lobortis ex nostra lacinia diam iaculis rhoncus,
								vivamus mus magnis erat natoque molestie sit. Gravida nec
								egestas in congue tellus inceptos interdum tempus phasellus,
								ipsum libero lorem nulla neque massa risus accumsan fringilla,
								augue ridiculus potenti ad dapibus sed suscipit est primis, orci
								erat rutrum dolor senectus aliquet adipiscing tempor. Eleifend
								erat neque a venenatis curae eu convallis augue, cubilia
								praesent felis tempus ullamcorper egestas sapien.
							</p>

							<p>
								Ornare dapibus luctus nam convallis tincidunt maecenas iaculis
								pretium a praesent vitae ante quam netus elementum purus, turpis
								ipsum est eget fames at posuere et sed pellentesque vehicula
								habitasse sapien porttitor. Dictumst nisl suspendisse laoreet
								auctor mus per quis mollis egestas ante nisi, sociosqu nec felis
								congue phasellus tellus velit quam praesent netus amet, dui
								curabitur platea penatibus lorem habitant facilisis parturient
								pretium conubia. Maximus libero ex lectus justo montes sodales
								vitae urna laoreet, malesuada ridiculus placerat porttitor
								eleifend nostra felis. Est varius habitasse enim accumsan
								viverra bibendum venenatis, at efficitur elit imperdiet inceptos
								sodales praesent, libero auctor dis justo maecenas pellentesque.
							</p>

							<p>
								Leo velit ante habitant lacinia egestas ultrices donec mollis
								tempus elit consectetur adipiscing, penatibus quisque justo
								dapibus pulvinar natoque himenaeos blandit netus interdum nibh.
								Mus penatibus netus luctus euismod et lorem aliquet diam
								suscipit adipiscing sapien, leo velit morbi duis non fermentum
								magnis consequat vulputate hac, litora suspendisse gravida arcu
								felis dui curae hendrerit ullamcorper mi. Tincidunt odio aptent
								habitasse urna nam vitae amet, nibh neque ultrices phasellus
								vehicula dignissim nisi, platea sociosqu conubia mi sollicitudin
								adipiscing. Lacus metus taciti turpis dapibus rutrum varius
								neque nibh phasellus, suscipit pellentesque ante fringilla mi
								fusce augue tristique est, curabitur adipiscing tellus ligula
								enim faucibus semper sollicitudin. Faucibus curabitur congue
								sociosqu consequat praesent turpis maximus, pharetra lacus
								facilisis netus mi orci laoreet viverra, urna mauris mollis
								lobortis fames augue. Lobortis massa curabitur nibh dignissim
								habitasse, dictumst porttitor erat augue tellus, ipsum sapien
								taciti nam. Tellus fringilla rutrum porttitor ultrices cubilia
								montes auctor ex dapibus adipiscing interdum volutpat, posuere
								ante amet ad purus eleifend suscipit sodales efficitur nisi.
								Neque dui habitant magnis fusce euismod fringilla, vitae
								imperdiet luctus id purus. Commodo accumsan facilisis risus
								sociosqu scelerisque a dolor convallis ad, pretium primis leo
								taciti metus vestibulum porttitor sapien diam, condimentum
								mattis ridiculus dignissim praesent mollis lacus conubia.
							</p>
				
					</Grid>
					<Grid item xs={6}>
						<Paper className={classes.paper}>xs=6</Paper>
					</Grid>
					<Grid item xs={3}>
						<Paper className={classes.paper}>
							{' '}
							<Button variant="outlined" className={classes.button}>
								Default
							</Button>
						</Paper>
					</Grid>
					<Grid item xs={3}>
						<Paper className={classes.paper}>xs=3</Paper>
					</Grid>
				</Grid>
			</div>
		</Container>
	);
}
