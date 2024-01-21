-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th1 17, 2024 lúc 09:04 PM
-- Phiên bản máy phục vụ: 8.0.31
-- Phiên bản PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `foodat`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitiethoadon`
--

DROP TABLE IF EXISTS `chitiethoadon`;
CREATE TABLE IF NOT EXISTS `chitiethoadon` (
  `id` int NOT NULL AUTO_INCREMENT,
  `soluong` int DEFAULT NULL,
  `gia` int DEFAULT NULL,
  `tong` int DEFAULT NULL,
  `mahoadon` int DEFAULT NULL,
  `masanpham` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_chitiet_sanpham` (`masanpham`),
  KEY `fk_chitiet_hoadon` (`mahoadon`)
) ENGINE=InnoDB AUTO_INCREMENT=269 DEFAULT CHARSET=utf8mb3;

--
-- Đang đổ dữ liệu cho bảng `chitiethoadon`
--

INSERT INTO `chitiethoadon` (`id`, `soluong`, `gia`, `tong`, `mahoadon`, `masanpham`) VALUES
(127, 2, 45000, 90000, 1294, 14),
(128, 1, 96000, 96000, 1294, 15),
(129, 1, 160000, 160000, 1294, 19),
(132, 2, 45000, 90000, 1297, 14),
(133, 1, 99000, 99000, 1297, 17),
(134, 1, 50000, 50000, 1298, 14),
(135, 1, 96000, 96000, 1298, 15),
(137, 2, 40000, 80000, 1300, 14);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhsachyeuthich`
--

DROP TABLE IF EXISTS `danhsachyeuthich`;
CREATE TABLE IF NOT EXISTS `danhsachyeuthich` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ten` varchar(100) DEFAULT NULL,
  `masanpham` int DEFAULT NULL,
  `makhachhang` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_danhsach_sanpham` (`masanpham`),
  KEY `fk_khachhang_danhsach` (`makhachhang`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb3;

--
-- Đang đổ dữ liệu cho bảng `danhsachyeuthich`
--

INSERT INTO `danhsachyeuthich` (`id`, `ten`, `masanpham`, `makhachhang`) VALUES
(30, 'Panner Noodles', 15, 37),
(31, 'Specialty Burger', 17, 37),
(32, 'Panner Noodles', 15, 41);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `daubep`
--

DROP TABLE IF EXISTS `daubep`;
CREATE TABLE IF NOT EXISTS `daubep` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ten` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `mota` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lienketyt` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lienketfb` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lienketig` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `hinhanh` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `daubep`
--

INSERT INTO `daubep` (`id`, `ten`, `mota`, `lienketyt`, `lienketfb`, `lienketig`, `hinhanh`) VALUES
(14, 'Gordon Ramsay', ' Đầu bếp người Anh nổi tiếng, làm việc tại nhiều nhà hàng danh tiếng và xuất hiện trong nhiều chương trình truyền hình nấu ăn.', 'https://www.youtube.com/', 'https://www.facebook.com/', 'https://www.instagram.com/', 'https://firebasestorage.googleapis.com/v0/b/fooddat-39850.appspot.com/o/1704821327078c1.jpg?alt=media&token=811683bb-0a52-42ca-b8d8-4948013c05eb'),
(15, 'Julia Child', 'Được biết đến là đầu bếp người Mỹ và là một trong những người nấu ăn nổi tiếng nhất thế giới, cô đã có ảnh hưởng lớn đối với ẩm thực Pháp.', 'https://www.youtube.com/', 'https://www.facebook.com/', 'https://www.instagram.com/', 'https://firebasestorage.googleapis.com/v0/b/fooddat-39850.appspot.com/o/1704821355411c2.jpg?alt=media&token=5c0edc3a-445c-4d22-b5a3-f6a41f0201fb'),
(16, 'Massimo Bottura', 'Đầu bếp người Ý, chủ nhân nhà hàng Osteria Francescana tại Modena, Ý, đã giành danh hiệu \"Nhà hàng xuất sắc nhất thế giới\" nhiều lần.', 'https://www.youtube.com/', 'https://www.facebook.com/', 'https://www.instagram.com/', 'https://firebasestorage.googleapis.com/v0/b/fooddat-39850.appspot.com/o/1704821386093c3.jpg?alt=media&token=03e7c8ed-4fff-4fef-8d20-2ddda2adda60'),
(17, 'Heston Blumenthal', 'Đầu bếp người Anh nổi tiếng với sự sáng tạo và thí nghiệm trong nấu ăn, là chủ nhân nhà hàng The Fat Duck ở Bray, Berkshire.', 'https://www.youtube.com/', 'https://www.facebook.com/', 'https://www.instagram.com/', 'https://firebasestorage.googleapis.com/v0/b/fooddat-39850.appspot.com/o/1704821432147c4.jpg?alt=media&token=df415805-4251-4581-aaa2-10f26dbc0c16'),
(18, 'René Redzepi', 'Đầu bếp người Đan Mạch, là chủ nhân nhà hàng Noma ở Copenhagen, Đan Mạch, đã đoạt danh hiệu \"Nhà hàng xuất sắc nhất thế giới\" nhiều lần.', 'https://www.youtube.com/', 'https://www.facebook.com/', 'https://www.instagram.com/', 'https://firebasestorage.googleapis.com/v0/b/fooddat-39850.appspot.com/o/1704821465701c5.jpg?alt=media&token=f4181987-b52a-4aa4-9464-847d9331f435');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoadon`
--

DROP TABLE IF EXISTS `hoadon`;
CREATE TABLE IF NOT EXISTS `hoadon` (
  `id` int NOT NULL AUTO_INCREMENT,
  `hoten` varchar(100) DEFAULT NULL,
  `diachi` varchar(255) DEFAULT NULL,
  `sdt` varchar(20) DEFAULT NULL,
  `trangthai` varchar(20) DEFAULT NULL,
  `ngaydathang` datetime DEFAULT NULL,
  `makhachhang` int NOT NULL,
  `tongtien` int NOT NULL,
  `ghichu` text NOT NULL,
  `quan` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_hoadon_khachhang` (`makhachhang`)
) ENGINE=InnoDB AUTO_INCREMENT=1427 DEFAULT CHARSET=utf8mb3;

--
-- Đang đổ dữ liệu cho bảng `hoadon`
--

INSERT INTO `hoadon` (`id`, `hoten`, `diachi`, `sdt`, `trangthai`, `ngaydathang`, `makhachhang`, `tongtien`, `ghichu`, `quan`) VALUES
(1294, 'tien dat', '118 Pham Hung', '019481', 'Đang vận chuyển', '2024-01-10 00:33:56', 37, 346000, 'note', 'Quận 8'),
(1297, 'nguyen van', '33 Cao Lo', '0237545', 'Đã giao', '2024-01-10 14:11:41', 37, 189000, 'ghi', 'Quận 2'),
(1298, 'pham teo', '923 duong 3thang2', '9236182', 'Đã giao', '2024-01-10 14:20:21', 37, 146000, 'ngon', 'Quận 5'),
(1300, 'mua', '88 Le Duan', '98164143', 'Đang xác nhận', '2024-01-15 21:37:26', 41, 80000, 'mon ngon', 'Quận 10');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
CREATE TABLE IF NOT EXISTS `khachhang` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ten` varchar(100) DEFAULT NULL,
  `tendem` varchar(100) DEFAULT NULL,
  `gmail` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `diachi` varchar(100) DEFAULT NULL,
  `gioitinh` varchar(20) DEFAULT NULL,
  `sdt` varchar(20) DEFAULT NULL,
  `matrangthai` int DEFAULT NULL,
  `maphanquyen` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_khachhang_phanquyen` (`maphanquyen`),
  KEY `fk_khachhang_trangthai` (`matrangthai`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb3;

--
-- Đang đổ dữ liệu cho bảng `khachhang`
--

INSERT INTO `khachhang` (`id`, `ten`, `tendem`, `gmail`, `password`, `diachi`, `gioitinh`, `sdt`, `matrangthai`, `maphanquyen`) VALUES
(37, 'Dat', 'tien', 'dat@gmail', '$2b$10$FnnqcR9kfNtwr7pzi.tQX.ZqNA7aGrJWa0PhN8uAidrcpwEFx8nka', 'quan8', 'Nam', '0129348', 1, 1),
(40, 'Van', 'nguyen', 'nguyenvan@gmail', '$2b$10$ETdndzf6j/fw4ynLnQUAVOaXbsa5KqDDJmJUM8GoNDrfuDEF1BfVe', '123ab', 'Nam', '836012', 1, 1),
(41, 'Nhan', 'siu', 'siunhan@gmail', '$2b$10$ke9.5Has1Pl3gbvFy9xCx.kpMbzxV0Xz6Dl9fg882xLASLe5JAEUK', '39phamhung', 'Nữ', '183429', 1, 1),
(42, 'Minh', 'le', 'leminh@gmail', '$2b$10$TVtYyp4vv/Akje7T3wIoleZQ90aLyFt9T0f2yOUGFUna34UMpq0Re', 'diachi11', 'Nam', '237014', 1, 1),
(43, 'Duong', 'pham', 'duong@gmail', '$2b$10$uTUCfZ0ql46yuNg7wsuYE.hSxePBKp9OG7EMGjOAOulvlbIjV/vDe', '280 xso', 'Nữ', '132984', 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khuyenmai`
--

DROP TABLE IF EXISTS `khuyenmai`;
CREATE TABLE IF NOT EXISTS `khuyenmai` (
  `id` int NOT NULL AUTO_INCREMENT,
  `phantramkhuyenmai` varchar(255) DEFAULT NULL,
  `thoigianBD` datetime DEFAULT NULL,
  `thoigianKT` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;

--
-- Đang đổ dữ liệu cho bảng `khuyenmai`
--

INSERT INTO `khuyenmai` (`id`, `phantramkhuyenmai`, `thoigianBD`, `thoigianKT`) VALUES
(7, '10', '2024-01-09 00:00:00', '2024-01-31 00:00:00'),
(8, '20', '2024-01-09 00:00:00', '2024-02-02 00:00:00'),
(9, '0', '2024-01-01 00:00:00', '2024-01-31 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaihang`
--

DROP TABLE IF EXISTS `loaihang`;
CREATE TABLE IF NOT EXISTS `loaihang` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ten` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;

--
-- Đang đổ dữ liệu cho bảng `loaihang`
--

INSERT INTO `loaihang` (`id`, `ten`) VALUES
(7, 'Hamburger'),
(8, 'Mỳ ý'),
(9, 'Meat');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phanquyen`
--

DROP TABLE IF EXISTS `phanquyen`;
CREATE TABLE IF NOT EXISTS `phanquyen` (
  `makhachhang` int NOT NULL,
  `maquantri` int NOT NULL,
  KEY `fk_quantri_phanquyen` (`maquantri`),
  KEY `fk_khachhang_phanquyen` (`makhachhang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `phanquyen`
--

INSERT INTO `phanquyen` (`makhachhang`, `maquantri`) VALUES
(1, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `quantrivien`
--

DROP TABLE IF EXISTS `quantrivien`;
CREATE TABLE IF NOT EXISTS `quantrivien` (
  `id` int NOT NULL AUTO_INCREMENT,
  `maphanquyen` int NOT NULL,
  `ten` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `gmail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_quantri_phanquyen` (`maphanquyen`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `quantrivien`
--

INSERT INTO `quantrivien` (`id`, `maphanquyen`, `ten`, `gmail`, `password`) VALUES
(0, 2, 'admin', 'admin@gmail.com', '$2b$10$c0gtq0uObRzFbZ/LN9..vO2eLyMnHo/RbVSgwvMgGNaRJIr.g4IVW');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

DROP TABLE IF EXISTS `sanpham`;
CREATE TABLE IF NOT EXISTS `sanpham` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mota` varchar(255) DEFAULT NULL,
  `ten` varchar(255) DEFAULT NULL,
  `hinhanh` varchar(255) DEFAULT NULL,
  `dongia` int DEFAULT NULL,
  `tinhtrang` varchar(20) DEFAULT NULL,
  `maloaihang` int DEFAULT NULL,
  `makhuyenmai` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_sanpham_loaihang` (`maloaihang`),
  KEY `fk_sanpham_khuyenmai` (`makhuyenmai`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`id`, `mota`, `ten`, `hinhanh`, `dongia`, `tinhtrang`, `maloaihang`, `makhuyenmai`) VALUES
(14, 'Burger thịt', 'Smash Burger', 'https://firebasestorage.googleapis.com/v0/b/fooddat-39850.appspot.com/o/17048189732628.png?alt=media&token=b047f8e3-f1e3-41c0-8d5f-0f35727e5597', 50000, 'Còn hàng', 7, 8),
(15, 'Mỳ rau củ', 'Panner Noodles', 'https://firebasestorage.googleapis.com/v0/b/fooddat-39850.appspot.com/o/17048186916233.png?alt=media&token=eca64e90-2ddc-44b0-9f3b-197c34413ea3', 120000, 'Còn hàng', 8, 8),
(16, 'Mỳ gà', 'Chicken Noodles', 'https://firebasestorage.googleapis.com/v0/b/fooddat-39850.appspot.com/o/17048187726074.png?alt=media&token=7a7db60c-c4dd-4c1f-91dc-b252a0259c37', 125000, 'Còn hàng', 8, NULL),
(17, 'Burger đặc biệt', 'Specialty Burger', 'https://firebasestorage.googleapis.com/v0/b/fooddat-39850.appspot.com/o/170481883275810.png?alt=media&token=be854708-1a10-4ac8-b3ab-4cb7b3772ca2', 99000, 'Còn hàng', 7, NULL),
(18, 'Gà áp chảo', 'Chicken Veggies', 'https://firebasestorage.googleapis.com/v0/b/fooddat-39850.appspot.com/o/17048188815791.png?alt=media&token=f54121d4-e2da-4d5a-97c0-e2acd3d663c1', 160000, 'Còn hàng', 9, 8),
(19, 'Bò mềm', 'Beefsteak', 'https://firebasestorage.googleapis.com/v0/b/fooddat-39850.appspot.com/o/17048192273412.png?alt=media&token=5d2a8610-5281-40c8-9af0-d8f145f8bb56', 160000, 'Còn hàng', 9, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `trangthai`
--

DROP TABLE IF EXISTS `trangthai`;
CREATE TABLE IF NOT EXISTS `trangthai` (
  `id` int NOT NULL AUTO_INCREMENT,
  `trangthai` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `trangthai`
--

INSERT INTO `trangthai` (`id`, `trangthai`) VALUES
(1, 'Hoạt Động'),
(2, 'Ngưng');

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  ADD CONSTRAINT `fk_chitiet_hoadon` FOREIGN KEY (`mahoadon`) REFERENCES `hoadon` (`id`),
  ADD CONSTRAINT `fk_chitiet_sanpham` FOREIGN KEY (`masanpham`) REFERENCES `sanpham` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Các ràng buộc cho bảng `danhsachyeuthich`
--
ALTER TABLE `danhsachyeuthich`
  ADD CONSTRAINT `fk_khachhang_danhsach` FOREIGN KEY (`makhachhang`) REFERENCES `khachhang` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Các ràng buộc cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  ADD CONSTRAINT `fk_hoadon_khachhang` FOREIGN KEY (`makhachhang`) REFERENCES `khachhang` (`id`);

--
-- Các ràng buộc cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  ADD CONSTRAINT `fk_khachhang_phanquyen` FOREIGN KEY (`maphanquyen`) REFERENCES `phanquyen` (`makhachhang`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_khachhang_trangthai` FOREIGN KEY (`matrangthai`) REFERENCES `trangthai` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Các ràng buộc cho bảng `quantrivien`
--
ALTER TABLE `quantrivien`
  ADD CONSTRAINT `fk_quantri_phanquyen` FOREIGN KEY (`maphanquyen`) REFERENCES `phanquyen` (`maquantri`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Các ràng buộc cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `fk_sanpham_khuyenmai` FOREIGN KEY (`makhuyenmai`) REFERENCES `khuyenmai` (`id`),
  ADD CONSTRAINT `fk_sanpham_loaihang` FOREIGN KEY (`maloaihang`) REFERENCES `loaihang` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
