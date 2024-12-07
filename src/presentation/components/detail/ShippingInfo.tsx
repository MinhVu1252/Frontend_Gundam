import { useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";
import { LocalShipping } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const ShippingLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "14px",
  marginBottom: "4px",
}));

const ShippingTime = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  color: theme.palette.primary.main,
  fontSize: "14px",
  "& svg": {
    fontSize: "16px",
    color: theme.palette.primary.main,
  },
}));

interface ShippingOption {
  name: string;
  time: string;
  originalPrice: number;
  finalPrice: string;
  voucher: string;
  minOrder: string;
}

export function ShippingInfo() {
  const [open, setOpen] = useState(false);

  const shippingOptions: ShippingOption[] = [
    {
      name: "Hàng Công Kênh",
      time: "Nhận từ 7 Th12 - 9 Th12",
      originalPrice: 437600,
      finalPrice: "Miễn phí vận chuyển",
      voucher: "Tặng Voucher ₫15.000 nếu đơn giao sớm thời gian trên.",
      minOrder: "Miễn phí vận chuyển đơn tối thiểu ₫500.000",
    },
    {
      name: "Nhanh",
      time: "Nhận từ 7 Th12 - 9 Th12",
      originalPrice: 437600,
      finalPrice: "Miễn phí vận chuyển",
      voucher: "Tặng Voucher ₫15.000 nếu đơn giao sớm thời gian trên.",
      minOrder: "Miễn phí vận chuyển đơn tối thiểu ₫500.000",
    },
  ];

  return (
    <>
      <Box
        onClick={() => setOpen(true)}
        sx={{
          cursor: "pointer",
          py: 1.5,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <ShippingLabel>Vận Chuyển</ShippingLabel>
        <ShippingTime>
          <LocalShipping
            fontSize="small"
            sx={{ color: "var(--neutral-04100, #6C7275)" }}
          />
          <Typography
            component="span"
            sx={{
              fontSize: "14px",
              color: "var(--neutral-04100, #6C7275)",
              fontWeight: 500,
            }}
          >
            Nhận từ 7 Th12 - 9 Th12, phí giao 40
          </Typography>
        </ShippingTime>
      </Box>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "8px",
          },
        }}
      >
        <DialogTitle sx={{ pb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
            Thông tin về phí vận chuyển
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Vận chuyển tới: Thị Trấn Tân Phú, Huyện Đồng Phú
          </Typography>
        </DialogTitle>
        <DialogContent>
          <List sx={{ pt: 0 }}>
            {shippingOptions.map((option, index) => (
              <Box key={option.name}>
                <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontWeight: 600, mb: 1 }}>
                        {option.name}
                      </Typography>
                    }
                    secondary={
                      <Box sx={{ mt: 0.5 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "primary.main", mb: 0.5 }}
                        >
                          {option.time}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            textDecoration: "line-through",
                            color: "text.secondary",
                            mb: 0.5,
                          }}
                        >
                          ₫{option.originalPrice.toLocaleString()}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "primary.main",
                            fontWeight: 500,
                            mb: 0.5,
                          }}
                        >
                          {option.finalPrice}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#00a651", mb: 0.5 }}
                        >
                          {option.voucher}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {option.minOrder}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
                {index < shippingOptions.length - 1 && (
                  <Divider sx={{ my: 1 }} />
                )}
              </Box>
            ))}
          </List>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button
              onClick={() => setOpen(false)}
              variant="contained"
              sx={{
                bgcolor: "#ee4d2d",
                "&:hover": {
                  bgcolor: "#d73211",
                },
                px: 3,
              }}
            >
              Đã Hiểu
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
