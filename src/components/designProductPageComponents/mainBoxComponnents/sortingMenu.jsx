import { Box, Button, Menu, MenuItem, TextField } from "@mui/material";
import React from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const SortingMenu = () => {
  return (
    <Box>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button
              variant="outlined"
              {...bindTrigger(popupState)}
              sx={{ p: 0, borderRadius: "0", border: "1px solid #192d34" }}
            >
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    height: 30,
                    borderRadius: "0",
                    border: "1px solid #192d34",
                  },
                }}
              />
              <KeyboardArrowDownIcon
                sx={{
                  border: "1px solid #192d34",
                  width: "30px",
                  height: "30px",
                  color: "#192d34",
                }}
              />
            </Button>
            <Menu
              {...bindMenu(popupState)}
              PaperProps={{
                style: {
                  width: 244,
                },
              }}
            >
              <MenuItem onClick={popupState.close}>Profile</MenuItem>
              <MenuItem onClick={popupState.close}>My account</MenuItem>
              <MenuItem onClick={popupState.close}>Logout</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </Box>
  );
};

export default SortingMenu;
