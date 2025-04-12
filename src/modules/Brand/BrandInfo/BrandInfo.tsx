import {
  Grid,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import {
  StyledContainer,
  CusPaper,
  CusGrid,
  CusTypography,
  CusBox,
  CusGirdTotal,
  CusIcon,
} from "./BrandInfo.style";
import React, { useState } from "react";
import {
  ArrowDropDown,
  Home,
  Settings,
  AccountCircle,
} from "@mui/icons-material";
import CusButton from "../../../componets/Button/CusButton";
import data from "../../../data/drowdownData.json";

export default function BrandInfo() {
  // Dữ liệu mẫu với các tùy chọn
  const dropdownData = data;
  // Hàm render SVG từ chuỗi
  const renderIconFromString = (svgString: string) => (
    <span dangerouslySetInnerHTML={{ __html: svgString }} />
  );
  // Trạng thái để quản lý menu mở
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<number | null>(null); // Theo dõi menu nào đang mở

  // Hàm mở Menu
  const handleClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(id); // Đặt dropdown tương ứng mở
  };

  // Hàm đóng Menu
  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(null); // Đóng tất cả các menu
  };

  return (
    <StyledContainer>
      <CusPaper>
        {/* Phần drowdown */}
        <CusBox sx={{ flexGrow: 1, padding: 2 }}>
          <CusGirdTotal container spacing={2}>
            {dropdownData.map((item) => (
              <CusGrid item xs={12} md={3} key={item.id}>
                <CusButton
                  size="large"
                  variant="text"
                  fullWidth
                  onClick={(event) => handleClick(event, item.id)}
                  startIcon={
                    item.iconStart ? (
                      <CusIcon
                        src={item.iconStart}
                        alt="icon"
                        width={20}
                        height={20}
                      />
                    ) : null
                  }
                  endIcon={
                    item.iconEnd ? (
                      <CusIcon
                        src={item.iconEnd}
                        alt="icon"
                        width={20}
                        height={20}
                      />
                    ) : null
                  }
                >
                  <CusTypography> {item.label}</CusTypography>
                </CusButton>

                {/* Render Menu với các options từ dữ liệu JSON */}
                <Menu
                  anchorEl={anchorEl}
                  open={openMenu === item.id}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {item.options.map((option, index) => (
                    <MenuItem key={index} onClick={handleClose}>
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </CusGrid>
            ))}
          </CusGirdTotal>
        </CusBox>
        {/* Phần button */}
        <CusButton size="small" variant="contained">
          {" "}
          Search{" "}
        </CusButton>
      </CusPaper>
    </StyledContainer>
  );
}
///
