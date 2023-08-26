import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NestedMenuItem from "./NestedMenuItem";

export const Dropdown = React.forwardRef(
  (
    {
      trigger,
      menu,
      keepOpen: keepOpenGlobal,
      isOpen: controlledIsOpen,
      onOpen: onControlledOpen,
      minWidth,
    },
    ref
  ) => {
    const [isInternalOpen, setInternalOpen] = useState(null);

    const isOpen = controlledIsOpen || isInternalOpen;

    let anchorRef = useRef(null);
    if (ref) {
      anchorRef = ref;
    }

    const handleOpen = (event) => {
      event.stopPropagation();

      if (menu.length) {
        if (onControlledOpen) {
          onControlledOpen(event.currentTarget);
        } else {
          setInternalOpen(event.currentTarget);
        }
      }
    };

    const handleClose = (event) => {
      event.stopPropagation();

      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }

      handleForceClose();
    };

    const handleForceClose = () => {
      if (onControlledOpen) {
        onControlledOpen(null);
      } else {
        setInternalOpen(null);
      }
    };

    const renderMenu = (menuItem, index) => {
      const { keepOpen: keepOpenLocal, ...props } = menuItem.props;

      let extraProps = {};
      if (props.menu) {
        extraProps = {
          parentMenuOpen: isOpen,
        };
      }

      return React.createElement(menuItem.type, {
        ...props,
        key: index,
        ...extraProps,
        onClick: (event) => {
          event.stopPropagation();

          if (!keepOpenGlobal && !keepOpenLocal) {
            handleClose(event);
          }

          if (menuItem.props.onClick) {
            menuItem.props.onClick(event);
          }
        },
        children: props.menu
          ? React.Children.map(props.menu, renderMenu)
          : props.children,
      });
    };

    return (
      <>
        {React.cloneElement(trigger, {
          onClick: isOpen ? handleForceClose : handleOpen,
          ref: anchorRef,
        })}

        <Menu
          PaperProps={{
            elevation: 4,
            sx: {
              minWidth: minWidth ?? 0,
              boxShadow: "0px 2px 6px rgba(230, 230, 230, 0.1)",
              bgcolor: "#f2f2f2",
            },
          }}
          anchorEl={isOpen}
          open={!!isOpen}
          onClose={handleClose}
        >
          {React.Children.map(menu, renderMenu)}
        </Menu>
      </>
    );
  }
);

export const DropdownMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: space-between !important;
  & > svg {
    margin-left: 32px;
  }
`;

export const DropdownNestedMenuItem = styled(NestedMenuItem)`
  display: flex;
  justify-content: space-between !important;
  & > svg {
    margin-left: 32px;
  }
`;
