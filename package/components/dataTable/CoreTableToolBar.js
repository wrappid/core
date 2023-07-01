import * as React from "react";
import PropTypes from "prop-types";
import TableBulkAction from "./CoreTableBulkAction";
import CoreTypographyBody1 from "../dataDisplay/paragraph/CoreTypographyBody1";
import CoreBox from "../layouts/CoreBox";
import CoreIconButton from "../inputs/CoreIconButton";
import CoreCheckbox from "../inputs/CoreCheckbox";
import CorePopover from "../utils/CorePopover";
import CoreFormGroup from "../forms/CoreFormGroup";
import CoreFormControlLabel from "../forms/CoreFormGroupLabel";
import CoreToolBar from "../utils/CoreToolbar";
import CoreIcon from "../dataDisplay/CoreIcon";
import CoreTooltip from "../dataDisplay/CoreTooltip";
import config from "../../config/config";

export default function CoreTableToolBar(props) {
  const { HandleColumnFilter, columns, bulkActions, selected } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <CoreToolBar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(selected.length > 0 && {
          bgcolor: config.color.primaryTextColorLight,
        }),
      }}
    >
      {selected.length > 0 ? (
        <CoreTypographyBody1
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {selected.length} selected
        </CoreTypographyBody1>
      ) : null}

      {selected.length > 0 ? (
        <TableBulkAction selected={selected} bulkActions={bulkActions} />
      ) : (
        <CoreBox component="div" sx={{ flex: "100%", textAlign: "right" }}>
          <CoreTooltip title="Filter Columns">
            <CoreIconButton onClick={handleOpen}>
              <CoreIcon>filter_list</CoreIcon>
            </CoreIconButton>
          </CoreTooltip>
          <CorePopover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            {props?.headCells?.map((col) => (
              <CoreFormGroup row={true}>
                <CoreFormControlLabel
                  control={
                    <CoreCheckbox
                      onChange={(e) => {
                        HandleColumnFilter(e, col);
                      }}
                      checked={!columns.includes(col.id)}
                    />
                  }
                  label={col.label}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 16, marginLeft: 2 } }}
                />
              </CoreFormGroup>
            ))}
          </CorePopover>
        </CoreBox>
      )}
    </CoreToolBar>
  );
}

CoreTableToolBar.propTypes = {
  selected: PropTypes.array.isRequired,
};
