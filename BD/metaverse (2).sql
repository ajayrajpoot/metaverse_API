-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 12, 2022 at 05:21 AM
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
-- Table structure for table `buy`
--

CREATE TABLE `buy` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `item_type` varchar(50) NOT NULL,
  `item_id` int(11) NOT NULL,
  `mrp` float DEFAULT NULL,
  `buy_price` float DEFAULT NULL,
  `description` varchar(400) DEFAULT NULL,
  `comment` varchar(400) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `buy_rent`
--

CREATE TABLE `buy_rent` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `item_type` varchar(50) NOT NULL,
  `item_id` int(11) DEFAULT NULL,
  `mrp` float DEFAULT NULL,
  `buy_price` float DEFAULT NULL,
  `description` varchar(400) DEFAULT NULL,
  `comment` varchar(400) DEFAULT NULL,
  `time_of_rent` datetime DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `time_of_rent_unit` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category` varchar(100) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `image` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category`, `timestemp`, `image`) VALUES
(2, 'category1', '2022-04-11 02:14:15', ''),
(3, 'category1', '2022-04-11 02:14:15', '');

-- --------------------------------------------------------

--
-- Table structure for table `category_grocery_shop`
--

CREATE TABLE `category_grocery_shop` (
  `id` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category_grocery_shop`
--

INSERT INTO `category_grocery_shop` (`id`, `image`, `category`) VALUES
(2, '', 'category1'),
(3, '', 'category1'),
(4, '', 'category1');

-- --------------------------------------------------------

--
-- Table structure for table `chroist_tv`
--

CREATE TABLE `chroist_tv` (
  `id` int(11) NOT NULL,
  `url` varchar(100) NOT NULL,
  `description` varchar(400) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `auto_commenting` varchar(100) NOT NULL,
  `time_of_uploading` timestamp NULL DEFAULT current_timestamp(),
  `user_id` varchar(100) DEFAULT NULL,
  `profile_pic` varchar(100) DEFAULT NULL,
  `feeling_url` varchar(100) DEFAULT NULL,
  `like_count` int(11) NOT NULL DEFAULT 0,
  `comment_count` int(11) NOT NULL DEFAULT 0,
  `views_count` int(11) NOT NULL DEFAULT 0,
  `share_count` int(11) NOT NULL DEFAULT 0,
  `post_type` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chroist_tv`
--

INSERT INTO `chroist_tv` (`id`, `url`, `description`, `timestemp`, `auto_commenting`, `time_of_uploading`, `user_id`, `profile_pic`, `feeling_url`, `like_count`, `comment_count`, `views_count`, `share_count`, `post_type`) VALUES
(2, 'url', 'des', '2022-04-09 16:15:39', '', '2022-04-12 02:46:37', NULL, NULL, NULL, 0, 0, 0, 0, NULL),
(3, 'url', 'des', '2022-04-09 16:15:39', '', '2022-04-12 02:46:37', NULL, NULL, NULL, 0, 0, 0, 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `feeling_image`
--

CREATE TABLE `feeling_image` (
  `id` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feeling_image`
--

INSERT INTO `feeling_image` (`id`, `image`, `name`, `timestemp`) VALUES
(2, 'ee', '', '2022-04-09 07:57:11'),
(3, 'ee 33', '', '2022-04-09 07:57:41'),
(4, 'ee', '', '2022-04-09 08:03:37');

-- --------------------------------------------------------

--
-- Table structure for table `grocery_products`
--

CREATE TABLE `grocery_products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `product_count` int(11) NOT NULL,
  `description` varchar(400) NOT NULL,
  `off_percentage` float NOT NULL,
  `mrp` float NOT NULL,
  `selling_price` float NOT NULL,
  `quanitity` int(11) NOT NULL,
  `isAds` int(11) NOT NULL DEFAULT 0,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `isTrending` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `metaverse_chroist_tv`
--

CREATE TABLE `metaverse_chroist_tv` (
  `id` int(11) NOT NULL,
  `vedio_url` varchar(100) DEFAULT NULL,
  `description` varchar(400) NOT NULL,
  `time_of_uploading` timestamp NOT NULL DEFAULT current_timestamp(),
  `post_type` varchar(400) DEFAULT NULL,
  `username` varchar(400) NOT NULL,
  `profile_pic` varchar(400) DEFAULT NULL,
  `feeling_url` varchar(400) DEFAULT NULL,
  `auto_comment` varchar(400) NOT NULL DEFAULT '0',
  `like_count` int(11) NOT NULL DEFAULT 0,
  `comment_count` int(11) NOT NULL DEFAULT 0,
  `views_count` int(11) NOT NULL DEFAULT 0,
  `share_count` int(11) NOT NULL DEFAULT 0,
  `exclude_user` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `metaverse_land_shop`
--

CREATE TABLE `metaverse_land_shop` (
  `id` int(11) NOT NULL,
  `image_url` varchar(50) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `locations` varchar(50) DEFAULT NULL,
  `size` int(11) NOT NULL,
  `buying_price` float DEFAULT NULL,
  `idAds` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `metaverse_land_shop`
--

INSERT INTO `metaverse_land_shop` (`id`, `image_url`, `name`, `locations`, `size`, `buying_price`, `idAds`) VALUES
(2, 'inn', '', 'p.locations', 3, 1.1, 0),
(3, 'inn', '', 'p.locations', 3, 1.1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `metaverse_post`
--

CREATE TABLE `metaverse_post` (
  `id` int(11) NOT NULL,
  `url` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `feeling_count` int(11) NOT NULL DEFAULT 0,
  `comment_count` int(11) NOT NULL DEFAULT 0,
  `username` varchar(50) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `feeling_icon_urls` varchar(70) DEFAULT NULL,
  `view_type` varchar(50) NOT NULL DEFAULT '0',
  `post_type` varchar(50) NOT NULL DEFAULT '0',
  `views_count` int(11) NOT NULL DEFAULT 0,
  `share_count` int(11) NOT NULL DEFAULT 0,
  `like_count` int(11) NOT NULL DEFAULT 0,
  `exclude_user` varchar(500) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `metaverse_shop`
--

CREATE TABLE `metaverse_shop` (
  `id` int(11) NOT NULL,
  `shop_3d_url` varchar(200) NOT NULL,
  `name` varchar(100) NOT NULL,
  `location` varchar(100) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `idAds` int(11) NOT NULL DEFAULT 0,
  `timestemp` int(11) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `metaverse_shop`
--

INSERT INTO `metaverse_shop` (`id`, `shop_3d_url`, `name`, `location`, `category`, `idAds`, `timestemp`) VALUES
(2, 'ss', 'sss', '', '', 0, 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `metaverse_smachup`
--

CREATE TABLE `metaverse_smachup` (
  `id` int(11) NOT NULL,
  `video_url` varchar(400) DEFAULT NULL,
  `auto_comment` varchar(400) DEFAULT NULL,
  `post_type` varchar(400) DEFAULT NULL,
  `description` varchar(400) DEFAULT NULL,
  `title` varchar(400) DEFAULT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `username` varchar(400) DEFAULT NULL,
  `profile_pic` varchar(400) DEFAULT NULL,
  `feeling_url` varchar(400) DEFAULT NULL,
  `like_count` int(11) NOT NULL DEFAULT 0,
  `comment_count` int(11) NOT NULL DEFAULT 0,
  `views_count` int(11) NOT NULL DEFAULT 0,
  `share_count` int(11) NOT NULL DEFAULT 0,
  `exclude_user` varchar(400) DEFAULT NULL,
  `isAds` int(11) NOT NULL DEFAULT 0,
  `avatar_url` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `metaverse_thing_shop`
--

CREATE TABLE `metaverse_thing_shop` (
  `id` int(11) NOT NULL,
  `name` varchar(400) NOT NULL,
  `description` varchar(300) NOT NULL,
  `mrp` float NOT NULL,
  `product_count` int(11) NOT NULL,
  `seeling_prise` float NOT NULL,
  `rating` int(11) NOT NULL,
  `modle_3d` varchar(50) NOT NULL,
  `off_percentage` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `metaverse_token_shop`
--

CREATE TABLE `metaverse_token_shop` (
  `id` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `token_type` varchar(100) NOT NULL,
  `token_location` varchar(100) NOT NULL,
  `token_price` float NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `isAds` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `metaverse_token_shop`
--

INSERT INTO `metaverse_token_shop` (`id`, `image`, `name`, `token_type`, `token_location`, `token_price`, `timestemp`, `isAds`) VALUES
(2, '', 'nn', 'tt', 'jh', 0.1, '2022-04-09 15:56:56', 0);

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `url` varchar(100) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `category` varchar(100) NOT NULL,
  `off_percantage` float NOT NULL DEFAULT 0,
  `rent_price` float NOT NULL DEFAULT 0,
  `bying_price` float NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `url`, `name`, `description`, `category`, `off_percantage`, `rent_price`, `bying_price`, `timestemp`) VALUES
(2, 'p.url', 'p.name', 'p.description', 'p.category', 2, 1, 1, '2022-04-09 16:31:55'),
(3, 'p.url', 'p.name', 'p.description', 'p.category', 2, 1, 1, '2022-04-09 16:31:55');

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
  `feeling_icon_urls` varchar(70) DEFAULT NULL,
  `view_type` varchar(50) NOT NULL DEFAULT '0',
  `views_count` int(11) NOT NULL DEFAULT 0,
  `share_count` int(11) NOT NULL DEFAULT 0,
  `like_count` int(11) NOT NULL DEFAULT 0,
  `exclude_user` varchar(500) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `shops`
--

CREATE TABLE `shops` (
  `id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `name` varchar(400) NOT NULL,
  `off_percentage` float DEFAULT 0,
  `shop_count` int(11) DEFAULT 0,
  `remaining_shop_count` int(11) NOT NULL,
  `descripting` varchar(400) DEFAULT NULL,
  `mrp` float DEFAULT 0,
  `selling_price` float DEFAULT 0,
  `icon_image` varchar(100) DEFAULT NULL,
  `reating` float DEFAULT 0,
  `isAds` int(11) NOT NULL DEFAULT 0,
  `isRent` int(11) NOT NULL DEFAULT 0,
  `time_of_rent` varchar(10) DEFAULT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `images` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shops`
--

INSERT INTO `shops` (`id`, `category_id`, `name`, `off_percentage`, `shop_count`, `remaining_shop_count`, `descripting`, `mrp`, `selling_price`, `icon_image`, `reating`, `isAds`, `isRent`, `time_of_rent`, `timestemp`, `images`) VALUES
(2, 1, 'name', 2, NULL, 0, '', 1, 3, '', 1, 0, 0, '0', '2022-04-09 14:41:00', ''),
(3, 1, 'name', 2, 0, 0, '', 1, 3, '', 1, 0, 0, NULL, '2022-04-09 14:41:00', NULL),
(4, 1, 'name', 2, 0, 0, '', 1, 3, '', 1, 0, 0, '0', '2022-04-09 15:07:36', ''),
(5, 1, 'name', 2, 0, 0, '', 1, 3, '', 1, 0, 0, '0', '2022-04-09 15:16:27', '');

-- --------------------------------------------------------

--
-- Table structure for table `shop_rent_item`
--

CREATE TABLE `shop_rent_item` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `product_count` int(11) DEFAULT NULL,
  `time_of_rent` varchar(10) DEFAULT NULL,
  `off_percentage` float DEFAULT NULL,
  `descripting` varchar(400) DEFAULT NULL,
  `mrp` float DEFAULT NULL,
  `selling_price` int(11) DEFAULT NULL,
  `icon_image` varchar(400) DEFAULT NULL,
  `reating` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `remaining_count` int(11) DEFAULT NULL,
  `isAds` int(11) NOT NULL DEFAULT 0,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `profile_url` varchar(100) DEFAULT NULL,
  `exclude_user` int(11) DEFAULT NULL,
  `share_count` int(11) NOT NULL,
  `like_count` int(11) NOT NULL,
  `view_type` int(11) NOT NULL
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
-- Indexes for table `buy`
--
ALTER TABLE `buy`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `buy_rent`
--
ALTER TABLE `buy_rent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category_grocery_shop`
--
ALTER TABLE `category_grocery_shop`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chroist_tv`
--
ALTER TABLE `chroist_tv`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feeling_image`
--
ALTER TABLE `feeling_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `grocery_products`
--
ALTER TABLE `grocery_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metaverse_chroist_tv`
--
ALTER TABLE `metaverse_chroist_tv`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metaverse_land_shop`
--
ALTER TABLE `metaverse_land_shop`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metaverse_post`
--
ALTER TABLE `metaverse_post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metaverse_shop`
--
ALTER TABLE `metaverse_shop`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metaverse_smachup`
--
ALTER TABLE `metaverse_smachup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metaverse_thing_shop`
--
ALTER TABLE `metaverse_thing_shop`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metaverse_token_shop`
--
ALTER TABLE `metaverse_token_shop`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shops`
--
ALTER TABLE `shops`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shop_rent_item`
--
ALTER TABLE `shop_rent_item`
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
-- AUTO_INCREMENT for table `buy`
--
ALTER TABLE `buy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `buy_rent`
--
ALTER TABLE `buy_rent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `category_grocery_shop`
--
ALTER TABLE `category_grocery_shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `chroist_tv`
--
ALTER TABLE `chroist_tv`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `feeling_image`
--
ALTER TABLE `feeling_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `grocery_products`
--
ALTER TABLE `grocery_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `metaverse_chroist_tv`
--
ALTER TABLE `metaverse_chroist_tv`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `metaverse_land_shop`
--
ALTER TABLE `metaverse_land_shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `metaverse_post`
--
ALTER TABLE `metaverse_post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `metaverse_shop`
--
ALTER TABLE `metaverse_shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `metaverse_smachup`
--
ALTER TABLE `metaverse_smachup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `metaverse_thing_shop`
--
ALTER TABLE `metaverse_thing_shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `metaverse_token_shop`
--
ALTER TABLE `metaverse_token_shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shops`
--
ALTER TABLE `shops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `shop_rent_item`
--
ALTER TABLE `shop_rent_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
