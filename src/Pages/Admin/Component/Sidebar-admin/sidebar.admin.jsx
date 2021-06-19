import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import SettingsIcon from '@material-ui/icons/Settings';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import HomeAdmin from '../Home-admin/HomeAdmin.admin';
import User from '../User-admin/User.admin';
import Article from '../Article-admin/Article.admin';
import Siswa from '../Siswa-admin/Siswa.admin';
import Pendaftar from '../Pendaftar-admin/Pendaftar.admin';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Setting from '../Setting-admin/Setting.admin';
import Galeri from '../Galeri-admin/Galeri.admin';
import Kritikdansaran from '../Kritikdansaran-admin/Kritikdansaran.admin';
import Absensi from '../Absensi-admin/Absensi.admin';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Alumni from '../Alumni-admin/Alumni.admin';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Tutor from '../Tutor-admin/Tutor.admin';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Button from '@material-ui/core/Button';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Fasilitas from '../Fasilitas-admin/Fasilitas.admin';
import { auth } from '../../firebase/firebase.utils';
import { Redirect } from 'react-router-dom'
import WidgetsIcon from '@material-ui/icons/Widgets';
import firebase from '../../firebase/firebase.utils';
import Skladmin from '../SKL-admin/skladmin';
import Sklvalidasi from '../SKL-admin/sklvalidasi';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function Sidebar({ handlesignoutuser, history, match }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [route, setroute] = React.useState("Log");
    const [emailuser, setemailuser] = React.useState("");



    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    const handlesignout = () => {
        auth.signOut()
        handlesignoutuser()

    }

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                setemailuser(user.email)
            } else {

                // ...
            }
        })
    }, [])

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <Typography variant="h6" noWrap>
                        {route}
          </Typography> */}
                    <Typography variant="h6" className={classes.title}>
                        {route}
                    </Typography>
                    <Button color="inherit" onClick={handlesignout}>Sign Out</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Home', 'SKL', 'Validasi SKL', 'Log', 'User', 'Article', 'Siswa', 'Absensi', 'Alumni', 'Tutor'].map((text, index) => (
                        <ListItem button key={text} onClick={() => setroute(text)}  >

                            <ListItemIcon>{text === 'Home' ? <HomeIcon /> :
                                (text === "User" ?
                                    <PeopleIcon />
                                    :
                                    text === "Article" ?
                                        <AssignmentIcon />
                                        :
                                        text === "SKL" ?
                                            <AssignmentIcon />
                                            :
                                            text === "Validasi SKL" ?
                                                <AssignmentIcon />
                                                :
                                                text === "Alumni" ?
                                                    <SupervisedUserCircleIcon />
                                                    :
                                                    text === "Tutor" ?
                                                        <LocalLibraryIcon />
                                                        :
                                                        text === "Log" ?
                                                            <AccessTimeIcon />
                                                            :
                                                            text === "Absensi" ?
                                                                <FingerprintIcon />
                                                                :
                                                                <PeopleOutlineIcon />
                                )}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Kritik & Saran', 'Fasilitas', 'Setting', 'Galeri', 'Pendaftar'].map((text, index) => (
                        <ListItem button key={text} onClick={() => setroute(text)} >
                            <ListItemIcon>{text === "Kritik & Saran" ? <ChatBubbleIcon /> :
                                (
                                    text === "Setting" ?
                                        <SettingsIcon />
                                        :
                                        text === "Fasilitas" ?
                                            <WidgetsIcon />
                                            :
                                            text === "Galeri" ?
                                                <PhotoAlbumIcon />
                                                :
                                                <AssignmentIndIcon />
                                )
                            }

                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {
                    route === "Log" ?
                        <HomeAdmin />
                        :
                        (route === "User" ?
                            <User emailuser={emailuser} />
                            :
                            route === "Article" ?
                                <Article emailuser={emailuser} />
                                :
                                route === "SKL" ?
                                    <Skladmin />
                                    :
                                    route === "Validasi SKL" ?
                                        <Sklvalidasi />
                                        :
                                        route === "Siswa" ?
                                            <Siswa emailuser={emailuser} />
                                            :
                                            route === "Kritik & Saran" ?
                                                <Kritikdansaran emailuser={emailuser} />
                                                :
                                                route === "Fasilitas" ?
                                                    <Fasilitas emailuser={emailuser} />
                                                    :
                                                    route === "Setting" ?
                                                        <Setting emailuser={emailuser} />
                                                        :
                                                        route === "Absensi" ?
                                                            <Absensi emailuser={emailuser} />
                                                            :
                                                            route === "Alumni" ?
                                                                <Alumni emailuser={emailuser} />
                                                                :
                                                                route === "Tutor" ?
                                                                    <Tutor emailuser={emailuser} />
                                                                    :
                                                                    route === "Pendaftar" ?
                                                                        <Pendaftar emailuser={emailuser} />
                                                                        :
                                                                        route === "Galeri" ?
                                                                            <Galeri emailuser={emailuser} />
                                                                            :
                                                                            <Redirect to='/' />
                        )
                }
            </main>
        </div>
    );
}

export default Sidebar;