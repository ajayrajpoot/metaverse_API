-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 09, 2022 at 11:11 AM
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
-- Database: `metaverse`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category` varchar(100) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `feeling_image`
--

CREATE TABLE `feeling_image` (
  `id` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feeling_image`
--

INSERT INTO `feeling_image` (`id`, `image`, `timestemp`) VALUES
(2, 'ee', '2022-04-09 07:57:11'),
(3, 'ee 33', '2022-04-09 07:57:41'),
(4, 'ee', '2022-04-09 08:03:37');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `url` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `feeling_count` int(11) NOT NULL DEFAULT 0,
  `comment_count` int(11) NOT NULL DEFAULT 0,
  `username` varchar(50) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `feeling_icon_urls` varchar(70) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `name` varchar(400) NOT NULL,
  `off_percentage` float DEFAULT 0,
  `products_count` int(11) DEFAULT 0,
  `descripting` varchar(400) DEFAULT NULL,
  `mrp` float DEFAULT 0,
  `selling_price` float DEFAULT 0,
  `image_url1` varchar(100) DEFAULT NULL,
  `reating` float DEFAULT 0,
  `isAds` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category_id`, `name`, `off_percentage`, `products_count`, `descripting`, `mrp`, `selling_price`, `image_url1`, `reating`, `isAds`) VALUES
(1, 1, 'name', 2, 0, '', 1, 3, '', 1, 0),
(2, 1, 'name1', 2, 0, '', 1, 3, '', 1, 1),
(3, 1, 'name', 2, 0, '', 1, 3, '', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `products_ads`
--

CREATE TABLE `products_ads` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_count` int(11) NOT NULL DEFAULT 0,
  `off_percentage` float NOT NULL DEFAULT 0,
  `remaining_product_count` int(11) NOT NULL DEFAULT 0,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products_ads`
--

INSERT INTO `products_ads` (`id`, `product_id`, `product_count`, `off_percentage`, `remaining_product_count`, `timestemp`) VALUES
(1, 1, 1, 0, 3, '2022-04-09 08:58:54'),
(2, 1, 1, 0, 3, '2022-04-09 08:59:23'),
(3, 1, 1, 0, 3, '2022-04-09 08:59:42');

-- --------------------------------------------------------

--
-- Table structure for table `smachup`
--

CREATE TABLE `smachup` (
  `id` int(11) NOT NULL,
  `url` varchar(100) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `descriptions` varchar(500) DEFAULT NULL,
  `views_count` int(11) NOT NULL DEFAULT 0,
  `feeling_count` int(11) NOT NULL DEFAULT 0,
  `comment_counts` int(11) NOT NULL DEFAULT 0,
  `feeling_icon_url` varchar(100) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `time_of_uploading` timestamp NOT NULL DEFAULT current_timestamp(),
  `time_of_video` varchar(10) DEFAULT NULL,
  `profile_url` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `gender` char(1) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `phone_no` varchar(14) DEFAULT NULL,
  `profileimage` varchar(150) DEFAULT NULL,
  `avatarurl` varchar(150) DEFAULT NULL,
  `bio` varchar(500) DEFAULT NULL,
  `dirtof_birt` varchar(50) DEFAULT NULL,
  `followers_count` int(11) DEFAULT 0,
  `metaverse_friends_count` int(11) NOT NULL DEFAULT 0,
  `suscribers` int(11) NOT NULL DEFAULT 0,
  `account_type` int(11) DEFAULT NULL,
  `otp` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `name`, `gender`, `email`, `password`, `phone_no`, `profileimage`, `avatarurl`, `bio`, `dirtof_birt`, `followers_count`, `metaverse_friends_count`, `suscribers`, `account_type`, `otp`) VALUES
(1, 'test', 'test', '', 'test@gmail.com', '123456', '', '', '', '', '', 0, 0, 0, 0, 98012);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feeling_image`
--
ALTER TABLE `feeling_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products_ads`
--
ALTER TABLE `products_ads`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `smachup`
--
ALTER TABLE `smachup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `feeling_image`
--
ALTER TABLE `feeling_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products_ads`
--
ALTER TABLE `products_ads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `smachup`
--
ALTER TABLE `smachup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
