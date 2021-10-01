import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import hbBan from "./Images/hb_bann.png"
import hbIcon from "./Images/hb_icon.png"
import FeatherIcon from 'feather-icons-react';
import { Divider } from '@mui/material';
import classes from "./Main.module.css";
import list from "./list.json"

import SortBy from './Components/SortBy';
import {orderByAsc, orderByDesc} from './Utils/sorting';

import countapi from 'countapi-js';

const drawerWidth = 380;
const defaultSortBy = {
    difficulty: '',
};

function Main() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [keyword, setKeyword] = React.useState('');
    const [sortBy, setSortBy] = React.useState(defaultSortBy);
    const [currentLists, setCurrentLists] = React.useState([]);
    const [filteredLists, setFilteredLists] = React.useState(null);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const [page_views, setPageViews] = React.useState(0)

    React.useEffect(() => {
      async function getPageViews() {
        const views = await countapi.visits('global').catch(console.error)
        setPageViews(views.value)
      }
      getPageViews()
    }, []) 

    React.useEffect(() => {
        let tempCurrentLists = [];
        // merge arrays on list alphabets object to array
        Object.values(list.list).forEach((val) => tempCurrentLists.push(...val));

        setCurrentLists(tempCurrentLists);
    }, []);

    React.useEffect(() => {
        if (!keyword && !sortBy?.difficulty) {
            setFilteredLists(null);
        } else {
            let tempFilteredLists = currentLists;
            if (keyword) {
                tempFilteredLists = [...tempFilteredLists].filter(list => {
                    const findByOrganization = list.organization.toLowerCase().indexOf(keyword.toLowerCase()) > -1
                    let findByTags = false;
                    
                    for (const tag of list.tags) {
                        if (tag.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
                            findByTags = true;
                            break;
                        }
                    }

                    return findByOrganization || findByTags;
                });
            }
            
            if (sortBy?.difficulty) {
                tempFilteredLists = [...tempFilteredLists].sort(
                    (a, b) => sortBy.difficulty === 'least-to-most'
                        ? orderByAsc(a, b, 'no_of_prs')
                        : orderByDesc(a, b, 'no_of_prs')
                );
            }
            setFilteredLists(tempFilteredLists);
        }
    }, [keyword, sortBy?.difficulty, currentLists]);

    const handleChangeSortBy = value => setSortBy(value || defaultSortBy);

    const drawer = (
        <div style={{ backgroundColor: "#F4F0E1", height: "100%", alignItems: "center", textAlign: "center", display: "flex", flexDirection: "column" }}>
            {/* <Toolbar /> */}
            <h1 style={{ color: "#2B3531" }}>Swag List</h1>
            <img src={hbBan} alt="hb_banner" style={{ width: "290px" }} />
            <h4 style={{ color: "#78877e", marginLeft: "20px", marginRight: "20px" }}>This page aims to list down all swag opportunities offered by various organizations/companies during Hacktoberfest!</h4>
            <h4 style={{ color: "#303632", marginLeft: "20px", marginRight: "20px", fontWeight: "bolder" }}><b>Maintained by <a href="https://github.com/monizb" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#303632" }}>Monish Basaniwal</a></b></h4>
            <List>
                {/* {['List', 'More Info'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))} */}
            </List>
            <div>
                <button className={classes.github_btn}>
                    <a href="https://github.com/monizb/hacktoberfest-swag-list" target="_blank" rel="noreferrer"><FeatherIcon icon="github" color="white" /></a>
                </button>
            </div>

            <div className={classes.page_views_wrapper}>
              <div className={classes.page_views_spacer}></div>
              <h4>Page Views: { page_views }</h4>
            </div>
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
                style={{ boxShadow: "none", backgroundColor: "#91A88C" }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <FeatherIcon icon="menu" />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" style={{ display: "flex", alignItems: "center" }}>
                        <img src={hbIcon} style={{ width: 50, marginRight: 12 }} alt="small icon" />
                        Hacktoberfest 2021 Swag List
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <div className={classes.disclaimer}>
                        <h5 style={{ color: "#2B3531" }}>Hacktoberfest is the celebration of Open-Source, its that time of the year when people from all over the world come together to contribute to their favorite Open Source projects. To make the deal sweeter some organizations give out cool swags like tshirts, stickers and much more! This page aims to consolidate all the swag opportunities in one place and make it easier for you to choose from. <span style={{ color: "#B53A26" }}>Always remember, Hacktoberfest is about making "meaningful contributions" any kind of SPAM/HATRED is a big NO and isn't tolerated. Create PRs that add value and take home the sweet swags!</span></h5>
                        <h5 style={{ color: "#2B3531" }}><a href="https://www.digitalocean.com/community/tutorials/hacktoberfest-contributor-s-guide-how-to-find-and-contribute-to-open-source-projects" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#B53A26" }}>How to make meaningful contributions? </a></h5>
                        <h5 style={{ color: "#2B3531" }}>You can read more about Hacktoberfest <a href="https://hacktoberfest.digitalocean.com/" style={{ color: "#B53A26", textDecoration: "none" }}>here. </a>If you are a part of an organization listed below and dont wan't your swag to be listed, please contact me by raising an issue on the official repository and it will be taken down immediately.</h5>
                        <h5 style={{ color: "#2B3531" }}>Want to add this list to your own resource? Use the following JSON: </h5>
                        <h5 style={{ backgroundColor: "#F4F0E1", padding: 10, borderRadius: 5, width: "fit-content" }}><a href="https://github.com/monizb/hacktoberfest-swag-list/blob/main/src/list.json" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#B53A26" }}>https://github.com/monizb/hacktoberfest-swag-list/blob/main/src/list.json</a></h5>
                    </div>
                </Box>
                <div className={classes.filteredContainer}>
                    <div className={classes.searchContainer}>
                        <FeatherIcon icon="search" size={18} color="#91A88C" />
                        <input
                            type="text"
                            value={keyword}
                            onChange={e => setKeyword(e.target.value)}
                            className={classes.inputSearch}
                            placeholder="Find by organization name and tags"
                        />
                        {keyword && (
                            <IconButton onClick={() => setKeyword('')}>
                                <FeatherIcon icon="x" size={18} color="#677762" />
                            </IconButton>
                        )}
                    </div>
                    <SortBy sortBy={sortBy} onChangeSortBy={handleChangeSortBy} />
                </div>
                {!filteredLists ? (
                    <div className={classes.letterbox}>
                        {alphabets.map((letter) => (
                            <div key={letter}>
                                {
                                    list.list[letter].length !== 0 ? <div style={{ textAlign: "left" }}>
                                        <h2 style={{ color: "#B53A26", backgroundColor: "#F4F0E1", padding: "5px 20px", borderRadius: "4px" }}>{letter}</h2>
                                        {list.list[letter].map((item) => (
                                            <div style={{ padding: "5px 20px" }} className={classes.swagbox} key={item.organization}>
                                                <h3 style={{ color: "#2B3531" }}><a href={item.org_url} style={{ textDecoration: "none", color: "#2B3531" }} target="_blank" rel="noreferrer">{item.organization}</a></h3>
                                                <p>{item.description}</p>
                                                <div style={{ display: "flex" }}>
                                                    {item.tags.map((tag) => (
                                                        <h5 className={classes.tag} key={tag} onClick={() => setKeyword(tag)}>{tag}</h5>
                                                    ))}
                                                </div>
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#B53A26", fontWeight: 900 }}>Learn More &#x2192;</a>
                                                <div style={{ margin: "10px 0px" }}>
                                                    {list.list[letter].length !== 1 ? <Divider /> : null}
                                                </div>
                                            </div>
                                        ))}
                                    </div> : null
                                }
                            </div>
                        ))}
                    </div>
                ) : filteredLists.map((item) => (
                    <div className={classes.swagbox} key={item.organization}>
                        <h3 style={{ color: "#2B3531" }}><a href={item.org_url} style={{ textDecoration: "none", color: "#2B3531" }} target="_blank" rel="noreferrer">{item.organization}</a></h3>
                        <p>{item.description}</p>
                        <p className={classes.pullRequestsNumber}>No. of PRs: {item.no_of_prs}</p>
                        <div style={{ display: "flex" }}>
                            {item.tags.map((tag) => (
                                <h5 className={classes.tag} key={tag} onClick={() => setKeyword(tag)}>{tag}</h5>
                            ))}
                        </div>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#B53A26", fontWeight: 900 }}>Learn More &#x2192;</a>
                        <div style={{ margin: "10px 0px" }}>
                            <Divider />
                        </div>
                    </div>
                ))}
            </Box>
        </Box>
    );
}

export default Main;
