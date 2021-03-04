import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

interface Props {
    dropdown: any;
    handleClickOnDropdown: any;
}

const data = {
    "dropdown": [
        {
            "id": 1,
            "label": "Data 1"
        },
        {
            "id": 2,
            "label": "Data 2"
        },
        {
            "id": 3,
            "label": "Data 3"
        },
        {
            "id": 4,
            "label": "Data 4"
        },
        {
            "id": 5,
            "label": "Data 5"
        }
    ]
}

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props: MenuProps) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const ListDropdownMenu = (props: Props) => {
    const {handleClickOnDropdown} = props

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color={anchorEl? 'primary' : 'secondary'}
                onClick={handleClick}
            >
                {anchorEl? 'close' : 'open'} Dropdown
      </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    data.dropdown.map((item,i)=>{
                        return (
                            <StyledMenuItem key={i} onClick={()=> handleClickOnDropdown(item.label)}>
                                <ListItemIcon>
                                    <ArrowRightIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item.label} />
                            </StyledMenuItem>
                        );
                    })
                }
            </StyledMenu>
        </div>
    )
}

export default ListDropdownMenu;
