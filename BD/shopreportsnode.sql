-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 30, 2022 at 05:12 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopreportsnode`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  `category` varchar(500) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `active` int(11) NOT NULL,
  `is_delete` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `type_id`, `category`, `timestemp`, `active`, `is_delete`) VALUES
(1, 2, 'Deposite', '2022-04-30 05:40:02', 1, 0),
(2, 2, 'Withdraw', '2022-04-30 05:40:19', 1, 0),
(3, 2, 'Others', '2022-04-30 05:41:18', 1, 0),
(4, 1, 'Mobile', '2022-04-30 05:41:47', 1, 0),
(5, 1, 'Other', '2022-04-30 05:42:10', 1, 0),
(6, 3, 'Other', '2022-04-30 05:42:39', 1, 0),
(7, 4, 'Other', '2022-04-30 05:42:55', 1, 0),
(8, 5, 'Other', '2022-04-30 05:43:15', 1, 0),
(9, 4, 'Mobile', '2022-04-30 05:44:23', 1, 0),
(10, 4, 'Yearphone', '2022-04-30 05:45:00', 1, 0),
(11, 4, 'Batteries', '2022-04-30 05:45:46', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `buy_id` int(11) NOT NULL,
  `poduct_name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `qty` int(11) NOT NULL,
  `c_qty` int(11) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `note` varchar(500) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `discription` varchar(500) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `min_selling_price` float NOT NULL,
  `is_delete` int(11) NOT NULL DEFAULT 0,
  `code` int(11) NOT NULL,
  `buydate` datetime DEFAULT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`buy_id`, `poduct_name`, `price`, `qty`, `c_qty`, `timestemp`, `note`, `discription`, `min_selling_price`, `is_delete`, `code`, `buydate`, `category_id`) VALUES
(1, 'p1', 100, 10, 8, '2022-04-30 05:36:47', 'test1', '', 150, 0, 730791, '2022-12-31 00:00:00', 0),
(2, 'sas', 2, 12, 9, '2022-04-30 11:31:24', 'ww', 'wwe', 3, 0, 451266, '2022-12-31 00:00:00', 10);

-- --------------------------------------------------------

--
-- Table structure for table `reminder_note`
--

CREATE TABLE `reminder_note` (
  `id` int(11) NOT NULL,
  `note` varchar(100) DEFAULT NULL,
  `discription` varchar(200) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `user_name` varchar(100) DEFAULT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `is_delete` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reminder_note`
--

INSERT INTO `reminder_note` (`id`, `note`, `discription`, `user_id`, `user_name`, `timestemp`, `is_delete`) VALUES
(1, 'dd', 'sssd', 2, '1', '2022-04-30 15:04:58', 1),
(2, 'bodeee', 'desaa', 2, 'ajay', '2022-04-30 15:08:06', 1);

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `reports_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  `note` varchar(500) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `discription` varchar(500) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `is_delete` int(11) NOT NULL DEFAULT 0,
  `datetime` date NOT NULL,
  `user_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `cost` float NOT NULL,
  `profit` float NOT NULL,
  `code` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `selling_price` float NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`reports_id`, `type_id`, `note`, `discription`, `timestamp`, `is_delete`, `datetime`, `user_id`, `category_id`, `cost`, `profit`, `code`, `qty`, `selling_price`, `product_id`) VALUES
(1, 1, 'test', '', '2022-04-30 05:52:54', 0, '2022-04-29', 1, 4, 50, 0, 81690, 0, 0, 0),
(2, 0, '', '', '2022-04-30 05:53:32', 0, '2022-04-30', 2, 0, 100, 50, 730791, 1, 150, 1),
(3, 0, 'hasa', '', '2022-04-30 11:08:48', 0, '2022-04-30', 2, 0, 100, 50, 730791, 1, 150, 1),
(4, 0, 'fff', '', '2022-04-30 11:10:58', 0, '2022-04-30', 2, 0, 100, 50, 730791, 1, 150, 1),
(5, 0, 'qq', '', '2022-04-30 11:13:07', 0, '2022-04-30', 2, 0, 100, 50, 730791, 1, 150, 1),
(6, 0, 'sssssss', '', '2022-04-30 11:32:00', 0, '2022-04-30', 2, 0, 2, 1, 451266, 1, 3, 2),
(7, 0, '', '', '2022-04-30 11:43:32', 0, '2022-04-30', 2, 0, 2, 1, 451266, 1, 3, 2),
(8, 0, 'sssaaaa', '', '2022-04-30 11:45:50', 0, '2022-04-30', 2, 10, 2, 1, 451266, 1, 3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `type_id` int(11) NOT NULL,
  `ptype` varchar(200) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `active` int(11) NOT NULL,
  `is_delete` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`type_id`, `ptype`, `timestemp`, `active`, `is_delete`) VALUES
(1, 'Recharge', '2022-04-30 05:37:40', 1, 0),
(2, 'Banking', '2022-04-30 05:37:54', 1, 0),
(3, 'Online', '2022-04-30 05:38:13', 1, 0),
(4, 'Electronics', '2022-04-30 05:38:47', 1, 0),
(5, 'Cloths', '2022-04-30 05:39:07', 1, 0),
(6, 'Other', '2022-04-30 05:39:37', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `Balance` float NOT NULL DEFAULT 0,
  `timesteml` timestamp NOT NULL DEFAULT current_timestamp(),
  `active` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `name`, `email`, `password`, `Balance`, `timesteml`, `active`) VALUES
(1, 'Admin', 'admin@gmail.com', 'admin', 32635, '2021-06-03 17:19:05', 1);

-- --------------------------------------------------------

--
-- Table structure for table `wallet`
--

CREATE TABLE `wallet` (
  `wallet_id` int(11) NOT NULL,
  `deposit_withdraw` int(11) NOT NULL,
  `amount` float NOT NULL,
  `total_amount` float NOT NULL,
  `comment` varchar(500) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `note` varchar(100) NOT NULL,
  `code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wallet`
--

INSERT INTO `wallet` (`wallet_id`, `deposit_withdraw`, `amount`, `total_amount`, `comment`, `timestemp`, `note`, `code`) VALUES
(1, 0, 33000, 33000, '', '2022-04-30 05:36:02', '', 0),
(2, 1, 1000, 32000, ' test1, Price :100, Total Qty:10', '2022-04-30 05:36:47', 'AUTOWITHDRAW', 730791),
(3, 0, 50, 32050, 'test', '2022-04-30 05:52:54', 'SERVICE', 81690),
(4, 0, 150, 32200, 'Price  150, Total Qty: 1', '2022-04-30 05:53:32', 'SELLPRODUCT', 945575),
(5, 0, 150, 32350, 'hasaPrice  150, Total Qty: 1', '2022-04-30 11:08:48', 'SELLPRODUCT', 63645),
(6, 0, 150, 32500, 'fffPrice  150, Total Qty: 1', '2022-04-30 11:10:58', 'SELLPRODUCT', 383383),
(7, 0, 150, 32650, 'qqPrice  150, Total Qty: 1', '2022-04-30 11:13:07', 'SELLPRODUCT', 582057),
(8, 1, 24, 32626, ' ww, Price :2, Total Qty:12', '2022-04-30 11:31:24', 'AUTOWITHDRAW', 451266),
(9, 0, 3, 32629, 'sssssssPrice  3, Total Qty: 1', '2022-04-30 11:32:00', 'SELLPRODUCT', 800845),
(10, 0, 3, 32632, 'Price  3, Total Qty: 1', '2022-04-30 11:43:32', 'SELLPRODUCT', 749295),
(11, 0, 3, 32635, 'sssaaaaPrice  3, Total Qty: 1', '2022-04-30 11:45:50', 'SELLPRODUCT', 207786);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`buy_id`);

--
-- Indexes for table `reminder_note`
--
ALTER TABLE `reminder_note`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`reports_id`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`type_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `wallet`
--
ALTER TABLE `wallet`
  ADD PRIMARY KEY (`wallet_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `buy_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `reminder_note`
--
ALTER TABLE `reminder_note`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `reports_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `types`
--
ALTER TABLE `types`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `wallet`
--
ALTER TABLE `wallet`
  MODIFY `wallet_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
