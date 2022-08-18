-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 18, 2022 at 04:29 PM
-- Server version: 10.2.43-MariaDB
-- PHP Version: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jarhain_metaver`
--

-- --------------------------------------------------------

--
-- Table structure for table `accidental_facility_accident_messgae`
--

CREATE TABLE `accidental_facility_accident_messgae` (
  `id` int(11) NOT NULL,
  `message` text NOT NULL,
  `notificaion_message` text DEFAULT NULL,
  `voice_message` text DEFAULT NULL,
  `call_message` text DEFAULT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `active` int(11) NOT NULL DEFAULT 1,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accidental_facility_accident_messgae`
--

INSERT INTO `accidental_facility_accident_messgae` (`id`, `message`, `notificaion_message`, `voice_message`, `call_message`, `timestemp`, `active`, `user_id`) VALUES
(1, '', 'sdsasd', '', '', '2022-07-30 17:25:50', 0, 1),
(2, 'sad', '', '', '', '2022-07-30 17:25:56', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `accidental_facility_history`
--

CREATE TABLE `accidental_facility_history` (
  `id` int(11) NOT NULL,
  `helper_name` varchar(50) NOT NULL,
  `donation_amount` float NOT NULL,
  `location` varchar(50) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `notification_message` text DEFAULT NULL,
  `images_videos_live_stream` varchar(100) DEFAULT NULL,
  `time` varchar(20) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `accidental_prn_live` varchar(20) DEFAULT NULL,
  `active` int(11) NOT NULL DEFAULT 1,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accidental_facility_history`
--

INSERT INTO `accidental_facility_history` (`id`, `helper_name`, `donation_amount`, `location`, `message`, `notification_message`, `images_videos_live_stream`, `time`, `date`, `accidental_prn_live`, `active`, `timestemp`, `user_id`) VALUES
(1, '', 0, '', '', '', '', NULL, NULL, '', 0, '2022-07-30 17:39:21', 0);

-- --------------------------------------------------------

--
-- Table structure for table `brand_approve`
--

CREATE TABLE `brand_approve` (
  `id` int(11) NOT NULL,
  `brand_name` varchar(200) DEFAULT NULL,
  `brand_pricetag` float DEFAULT NULL,
  `brand_file_upload` varchar(200) DEFAULT NULL,
  `approve_date` varchar(30) DEFAULT NULL,
  `brand_logo` varchar(200) DEFAULT NULL,
  `are_you_ownear` int(11) DEFAULT NULL,
  `brand_price` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `buy`
--

CREATE TABLE `buy` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `item_type_DB` varchar(50) NOT NULL,
  `item_id` int(11) NOT NULL,
  `mrp` float DEFAULT NULL,
  `buy_price` float DEFAULT NULL,
  `description` varchar(400) DEFAULT NULL,
  `comment` varchar(400) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buy`
--

INSERT INTO `buy` (`id`, `user_id`, `item_type_DB`, `item_id`, `mrp`, `buy_price`, `description`, `comment`, `timestamp`) VALUES
(1, 1, 'ss', 1, 11, 111, 'ded', 'dwdw', '2022-04-12 16:31:10'),
(2, 1, '', 0, 0, 0, '', '', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `buy_rent`
--

CREATE TABLE `buy_rent` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `item_type_DB` varchar(50) NOT NULL,
  `item_id` int(11) DEFAULT NULL,
  `mrp` float DEFAULT NULL,
  `buy_price` float DEFAULT NULL,
  `description` varchar(400) DEFAULT NULL,
  `comment` varchar(400) DEFAULT NULL,
  `time_of_rent` datetime DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `time_of_rent_unit` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buy_rent`
--

INSERT INTO `buy_rent` (`id`, `user_id`, `item_type_DB`, `item_id`, `mrp`, `buy_price`, `description`, `comment`, `time_of_rent`, `timestamp`, `time_of_rent_unit`) VALUES
(1, 1, '1', NULL, NULL, NULL, NULL, NULL, '2022-04-12 18:42:56', '2022-04-12 16:43:06', NULL),
(2, 2, '', 0, 0, 0, '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '');

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
(4, '', 'category1'),
(5, '', 'category1'),
(6, '', 'category1');

-- --------------------------------------------------------

--
-- Table structure for table `chroist_camp_go_deatels`
--

CREATE TABLE `chroist_camp_go_deatels` (
  `id` int(11) NOT NULL,
  `chroist_camp` varchar(400) DEFAULT NULL,
  `money` float DEFAULT NULL,
  `name_of_inventorys` varchar(400) DEFAULT NULL,
  `location` varchar(400) DEFAULT NULL,
  `employ` varchar(400) DEFAULT NULL,
  `machine` varchar(400) DEFAULT NULL,
  `eletricy_bill` varchar(400) DEFAULT NULL,
  `water_bill` varchar(400) DEFAULT NULL,
  `gas_bill` varchar(400) DEFAULT NULL,
  `employ_cost` float DEFAULT NULL,
  `chroist_camp_go` varchar(400) DEFAULT NULL,
  `employ_name` varchar(400) DEFAULT NULL,
  `employ_driving_upload` varchar(400) DEFAULT NULL,
  `employ_identilyupload` varchar(400) DEFAULT NULL,
  `DOB_employ` varchar(400) DEFAULT NULL,
  `exprience` varchar(400) DEFAULT NULL,
  `sallary` float DEFAULT NULL,
  `employ_type` varchar(400) DEFAULT NULL,
  `machine_name` varchar(400) DEFAULT NULL,
  `proof_upload` varchar(400) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `date` varchar(400) DEFAULT NULL,
  `machne_type` varchar(400) DEFAULT NULL,
  `company` varchar(400) DEFAULT NULL,
  `vechile_registor_no` varchar(400) DEFAULT NULL,
  `vechile_type` varchar(400) DEFAULT NULL,
  `proof_upload_of_gas_bill` varchar(400) DEFAULT NULL,
  `proof` varchar(400) DEFAULT NULL,
  `upload_of_electric_bill` varchar(400) DEFAULT NULL,
  `no_of_vechile` varchar(400) DEFAULT NULL,
  `proof_upload_vechile_bill` varchar(400) DEFAULT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chroist_camp_go_deatels`
--

INSERT INTO `chroist_camp_go_deatels` (`id`, `chroist_camp`, `money`, `name_of_inventorys`, `location`, `employ`, `machine`, `eletricy_bill`, `water_bill`, `gas_bill`, `employ_cost`, `chroist_camp_go`, `employ_name`, `employ_driving_upload`, `employ_identilyupload`, `DOB_employ`, `exprience`, `sallary`, `employ_type`, `machine_name`, `proof_upload`, `price`, `date`, `machne_type`, `company`, `vechile_registor_no`, `vechile_type`, `proof_upload_of_gas_bill`, `proof`, `upload_of_electric_bill`, `no_of_vechile`, `proof_upload_vechile_bill`, `timestemp`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-08-18 16:20:10');

-- --------------------------------------------------------

--
-- Table structure for table `chroist_camp_ownear_inventory_order`
--

CREATE TABLE `chroist_camp_ownear_inventory_order` (
  `id` int(11) NOT NULL,
  `active` int(11) NOT NULL DEFAULT 1,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `quanilty` int(20) DEFAULT NULL,
  `product_name` varchar(20) DEFAULT NULL,
  `order_type` varchar(20) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `chroist_camp_ownear_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `post_type` varchar(50) DEFAULT NULL,
  `videourl` varchar(200) DEFAULT NULL,
  `tag` varchar(200) DEFAULT NULL,
  `location` varchar(200) DEFAULT NULL,
  `isarchive` varchar(200) DEFAULT NULL,
  `user_location_of_uploading` varchar(200) DEFAULT NULL,
  `quiz_user_iploading_intreste` varchar(200) DEFAULT NULL,
  `location_blocked_by_chroist_metaverse` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chroist_tv`
--

INSERT INTO `chroist_tv` (`id`, `url`, `description`, `timestemp`, `auto_commenting`, `time_of_uploading`, `user_id`, `profile_pic`, `feeling_url`, `like_count`, `comment_count`, `views_count`, `share_count`, `post_type`, `videourl`, `tag`, `location`, `isarchive`, `user_location_of_uploading`, `quiz_user_iploading_intreste`, `location_blocked_by_chroist_metaverse`) VALUES
(2, 'url', 'des', '2022-04-09 16:15:39', '', '2022-04-12 02:46:37', NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'url', 'des', '2022-04-09 16:15:39', '', '2022-04-12 02:46:37', NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'sdasd', '', '2022-04-12 16:48:54', '', '0000-00-00 00:00:00', '', '', '', 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'url', 'des', '2022-08-18 15:28:52', '', '2022-04-12 02:46:37', NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `exchange_tv_ac_refigartor_smart_phone_laptop_brands`
--

CREATE TABLE `exchange_tv_ac_refigartor_smart_phone_laptop_brands` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `brand_image` varchar(100) DEFAULT NULL,
  `brandname` varchar(100) DEFAULT NULL,
  `ac_brand_name` varchar(100) DEFAULT NULL,
  `ac_brandiamge` varchar(100) DEFAULT NULL,
  `refigartor_brand_name` varchar(100) DEFAULT NULL,
  `refigartor_refigrator_brand_image` varchar(100) DEFAULT NULL,
  `smart_phone_brand_name` varchar(100) DEFAULT NULL,
  `smart_phone_brand_image` varchar(100) DEFAULT NULL,
  `laptop_brand_name` varchar(100) DEFAULT NULL,
  `laptop_brand_iamge` varchar(100) DEFAULT NULL,
  `laptop_processor_modle` varchar(100) DEFAULT NULL,
  `tablet_brand_name` varchar(100) DEFAULT NULL,
  `tablet_brand_image` varchar(100) DEFAULT NULL,
  `washingmachine_brand_name` varchar(100) DEFAULT NULL,
  `washingmachine_brand_image` varchar(100) DEFAULT NULL,
  `modlename_tv` varchar(100) DEFAULT NULL,
  `tv_screen_size` varchar(100) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `exchange_tv_ac_refigartor_smart_phone_laptop_brands`
--

INSERT INTO `exchange_tv_ac_refigartor_smart_phone_laptop_brands` (`id`, `user_id`, `brand_image`, `brandname`, `ac_brand_name`, `ac_brandiamge`, `refigartor_brand_name`, `refigartor_refigrator_brand_image`, `smart_phone_brand_name`, `smart_phone_brand_image`, `laptop_brand_name`, `laptop_brand_iamge`, `laptop_processor_modle`, `tablet_brand_name`, `tablet_brand_image`, `washingmachine_brand_name`, `washingmachine_brand_image`, `modlename_tv`, `tv_screen_size`, `timestamp`) VALUES
(1, NULL, 'dca', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-08-14 12:41:15'),
(2, NULL, 'dca', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-08-14 12:46:49');

-- --------------------------------------------------------

--
-- Table structure for table `feeling_image`
--

CREATE TABLE `feeling_image` (
  `id` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feeling_image`
--

INSERT INTO `feeling_image` (`id`, `image`, `name`, `timestemp`, `user_id`) VALUES
(2, 'ee', '', '2022-04-09 07:57:11', NULL),
(3, 'ee 33', '', '2022-04-09 07:57:41', NULL),
(4, 'ee', '', '2022-04-09 08:03:37', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `follower_id` int(11) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `Keywords` varchar(200) DEFAULT NULL,
  `sellerorgin` varchar(50) DEFAULT NULL,
  `sellerprofilrname` varchar(50) DEFAULT NULL,
  `manufacturerby` int(11) DEFAULT NULL,
  `importedby` int(11) DEFAULT NULL,
  `packedby` int(11) DEFAULT NULL,
  `genricname` varchar(50) DEFAULT NULL,
  `video` varchar(100) DEFAULT NULL,
  `local_delivery_charges` float DEFAULT NULL,
  `zonal_delivery` varchar(10) DEFAULT NULL,
  `national_delivery_charges` float DEFAULT NULL,
  `international_delivery_charges` float DEFAULT NULL,
  `isTrending` int(11) NOT NULL DEFAULT 0,
  `payment_deatels` varchar(100) DEFAULT NULL,
  `last_date_of_return` varchar(100) DEFAULT NULL,
  `exchangeavableonuserlocation` varchar(100) DEFAULT NULL,
  `daydelevery` varchar(100) DEFAULT NULL,
  `exchange_and_save_up_to_money` varchar(100) DEFAULT NULL,
  `emi_of_paylatter_money` varchar(100) DEFAULT NULL,
  `emi_of_month` varchar(100) DEFAULT NULL,
  `intreste_of_emi` varchar(100) DEFAULT NULL,
  `emimoney` varchar(100) DEFAULT NULL,
  `interest` varchar(100) DEFAULT NULL,
  `processing_fee_of_bank` varchar(100) DEFAULT NULL,
  `sizes` float DEFAULT NULL,
  `colors` varchar(100) DEFAULT NULL,
  `storage` varchar(100) DEFAULT NULL,
  `quantities` int(11) DEFAULT NULL,
  `productimage` varchar(100) DEFAULT NULL,
  `modleurl_3d` varchar(100) DEFAULT NULL,
  `offer_title` varchar(100) DEFAULT NULL,
  `offerdescription` varchar(100) DEFAULT NULL,
  `fqa_of_offfer` varchar(100) DEFAULT NULL,
  `how_to_claim_of_oofer` varchar(100) DEFAULT NULL,
  `term_nd_condition_of_offer` varchar(100) DEFAULT NULL,
  `banks_for_emi` varchar(100) DEFAULT NULL,
  `what_coverd_in_warrinty` varchar(100) DEFAULT NULL,
  `what_not_covered_in_warrinty` varchar(100) DEFAULT NULL,
  `warrinty_of_months` varchar(100) DEFAULT NULL,
  `some_information_of_warrinty_and_provider` varchar(100) DEFAULT NULL,
  `paymen_options` varchar(100) DEFAULT NULL,
  `product_all_images` varchar(100) DEFAULT NULL,
  `product_all_videos` varchar(100) DEFAULT NULL,
  `lenght` float DEFAULT NULL,
  `breeght` float DEFAULT NULL,
  `height` float DEFAULT NULL,
  `weight` float DEFAULT NULL,
  `sub_category` varchar(100) DEFAULT NULL,
  `location_blocked_by_chroist_metaverse` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `grocery_products`
--

INSERT INTO `grocery_products` (`id`, `name`, `category`, `product_count`, `description`, `off_percentage`, `mrp`, `selling_price`, `quanitity`, `isAds`, `timestemp`, `Keywords`, `sellerorgin`, `sellerprofilrname`, `manufacturerby`, `importedby`, `packedby`, `genricname`, `video`, `local_delivery_charges`, `zonal_delivery`, `national_delivery_charges`, `international_delivery_charges`, `isTrending`, `payment_deatels`, `last_date_of_return`, `exchangeavableonuserlocation`, `daydelevery`, `exchange_and_save_up_to_money`, `emi_of_paylatter_money`, `emi_of_month`, `intreste_of_emi`, `emimoney`, `interest`, `processing_fee_of_bank`, `sizes`, `colors`, `storage`, `quantities`, `productimage`, `modleurl_3d`, `offer_title`, `offerdescription`, `fqa_of_offfer`, `how_to_claim_of_oofer`, `term_nd_condition_of_offer`, `banks_for_emi`, `what_coverd_in_warrinty`, `what_not_covered_in_warrinty`, `warrinty_of_months`, `some_information_of_warrinty_and_provider`, `paymen_options`, `product_all_images`, `product_all_videos`, `lenght`, `breeght`, `height`, `weight`, `sub_category`, `location_blocked_by_chroist_metaverse`) VALUES
(2, 'p.name', 'p.category', 3, 'des', 2, 3, 1.1, 1, 0, '2022-04-12 16:49:53', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, '', '', 0, '', 0, 0, 0, 0, 0, '0000-00-00 00:00:00', '', '', '', 0, 0, 0, '', '', 0, '', 0, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'dsf', '', 0, '', 0, 0, 0, 0, 0, '0000-00-00 00:00:00', '', '', '', 0, 0, 0, '', '', 0, '', 0, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'p.name', 'p.category', 3, 'des', 2, 3, 1.1, 1, 0, '2022-08-14 13:11:15', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `hashtag`
--

CREATE TABLE `hashtag` (
  `id` int(11) NOT NULL,
  `hashtag` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `logout`
--

CREATE TABLE `logout` (
  `id` int(11) NOT NULL,
  `logout_location` varchar(100) DEFAULT NULL,
  `time_of_logout` varchar(100) DEFAULT NULL,
  `location_of_logout` varchar(100) DEFAULT NULL,
  `timstemp` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `logout`
--

INSERT INTO `logout` (`id`, `logout_location`, `time_of_logout`, `location_of_logout`, `timstemp`, `user_id`) VALUES
(1, 'aas', NULL, NULL, '2022-08-14 12:41:28', 1),
(2, 'aas', NULL, NULL, NULL, 1);

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
  `exclude_user` varchar(400) NOT NULL,
  `user_id` int(11) NOT NULL,
  `tag` varchar(200) DEFAULT NULL,
  `location` varchar(200) DEFAULT NULL,
  `isarchive` varchar(200) DEFAULT NULL,
  `user_location_of_uploading` varchar(200) DEFAULT NULL,
  `quiz_user_iploading_intreste` varchar(200) DEFAULT NULL,
  `location_blocked_by_chroist_metaverse` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `metaverse_chroist_tv`
--

INSERT INTO `metaverse_chroist_tv` (`id`, `vedio_url`, `description`, `time_of_uploading`, `post_type`, `username`, `profile_pic`, `feeling_url`, `auto_comment`, `like_count`, `comment_count`, `views_count`, `share_count`, `exclude_user`, `user_id`, `tag`, `location`, `isarchive`, `user_location_of_uploading`, `quiz_user_iploading_intreste`, `location_blocked_by_chroist_metaverse`) VALUES
(2, ' 1', '', '2022-08-18 15:33:58', '', '', '', '', '', 0, 0, 0, 0, '', 0, NULL, NULL, NULL, NULL, NULL, NULL),
(3, ' 1', '', '2022-08-18 15:31:29', '', '', '', '', '', 0, 0, 0, 0, '', 0, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `metaverse_formers_places`
--

CREATE TABLE `metaverse_formers_places` (
  `id` int(11) NOT NULL,
  `url_3d` varchar(200) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `metaverse_friends_request`
--

CREATE TABLE `metaverse_friends_request` (
  `id` int(11) NOT NULL,
  `requesrfrom` int(11) NOT NULL,
  `request_to` int(11) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `is_accept` int(11) DEFAULT 0,
  `relation_type` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `metaverse_friends_request`
--

INSERT INTO `metaverse_friends_request` (`id`, `requesrfrom`, `request_to`, `timestemp`, `is_accept`, `relation_type`) VALUES
(1, 1, 1, '2022-05-28 16:57:39', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `metaverse_games`
--

CREATE TABLE `metaverse_games` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `location` varchar(200) DEFAULT NULL,
  `size_of_land` float DEFAULT NULL,
  `size_of_land_unit` varchar(10) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `metaverse_invite_collaborating_request`
--

CREATE TABLE `metaverse_invite_collaborating_request` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `world_3d_url` varchar(200) NOT NULL,
  `worlds_location` varchar(200) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `Invite_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `metaverse_invite_collaborating_request`
--

INSERT INTO `metaverse_invite_collaborating_request` (`id`, `user_id`, `world_3d_url`, `worlds_location`, `timestemp`, `Invite_by`) VALUES
(1, 1, 'sd', 'dfdf', '2022-05-28 17:06:30', 1);

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
  `idAds` int(11) NOT NULL DEFAULT 0,
  `Keywords` varchar(400) DEFAULT NULL,
  `sellerorgin` varchar(400) DEFAULT NULL,
  `sellerprofilename` varchar(400) DEFAULT NULL,
  `manufacturer_by` int(11) DEFAULT NULL,
  `importedby` int(11) DEFAULT NULL,
  `packedby` int(11) DEFAULT NULL,
  `generic_name` varchar(400) DEFAULT NULL,
  `local_delivery_charges` float DEFAULT NULL,
  `zonal_delivery` varchar(400) DEFAULT NULL,
  `exchange_and_save_up_to_money` varchar(100) DEFAULT NULL,
  `emi_of_paylatter_money` varchar(100) DEFAULT NULL,
  `intreste_of_emi` varchar(100) DEFAULT NULL,
  `emimoney` varchar(100) DEFAULT NULL,
  `emi_of_month` varchar(100) DEFAULT NULL,
  `international_delivery_charges` varchar(100) DEFAULT NULL,
  `national_delivery_charges` varchar(100) DEFAULT NULL,
  `payment_deatels` varchar(200) DEFAULT NULL,
  `last_date_of_return` varchar(100) DEFAULT NULL,
  `exchangeavableonuserlocation` varchar(100) DEFAULT NULL,
  `daydelevery` varchar(100) DEFAULT NULL,
  `interest` varchar(100) DEFAULT NULL,
  `processing_fee_of_bank` varchar(100) DEFAULT NULL,
  `sizes` varchar(100) DEFAULT NULL,
  `colors` varchar(100) DEFAULT NULL,
  `storage` varchar(100) DEFAULT NULL,
  `quantities` varchar(100) DEFAULT NULL,
  `productimage` varchar(100) DEFAULT NULL,
  `video` varchar(100) DEFAULT NULL,
  `modleurl_3d` varchar(100) DEFAULT NULL,
  `offer_title` varchar(100) DEFAULT NULL,
  `offerdescription` varchar(100) DEFAULT NULL,
  `fqa_of_offfer` varchar(100) DEFAULT NULL,
  `how_to_claim_of_oofer` varchar(100) DEFAULT NULL,
  `term_nd_condition_of_offer` varchar(100) DEFAULT NULL,
  `banks_for_emi` varchar(100) DEFAULT NULL,
  `what_coverd_in_warrinty` varchar(100) DEFAULT NULL,
  `warrinty_of_months` varchar(100) DEFAULT NULL,
  `some_information_of_warrinty_and_provider` varchar(100) DEFAULT NULL,
  `product_reviews` varchar(100) DEFAULT NULL,
  `reviewa_username` varchar(100) DEFAULT NULL,
  `profileurl` varchar(100) DEFAULT NULL,
  `time_of_reviewing` varchar(100) DEFAULT NULL,
  `extraimage_for_information_of_product` varchar(100) DEFAULT NULL,
  `product_all_images` varchar(100) DEFAULT NULL,
  `product_all_videos` varchar(100) DEFAULT NULL,
  `lenght` float DEFAULT NULL,
  `breeght` float DEFAULT NULL,
  `height` float DEFAULT NULL,
  `weight` float DEFAULT NULL,
  `sub_category` varchar(100) DEFAULT NULL,
  `location_blocked_by_chroist_metaverse` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `metaverse_land_shop`
--

INSERT INTO `metaverse_land_shop` (`id`, `image_url`, `name`, `locations`, `size`, `buying_price`, `idAds`, `Keywords`, `sellerorgin`, `sellerprofilename`, `manufacturer_by`, `importedby`, `packedby`, `generic_name`, `local_delivery_charges`, `zonal_delivery`, `exchange_and_save_up_to_money`, `emi_of_paylatter_money`, `intreste_of_emi`, `emimoney`, `emi_of_month`, `international_delivery_charges`, `national_delivery_charges`, `payment_deatels`, `last_date_of_return`, `exchangeavableonuserlocation`, `daydelevery`, `interest`, `processing_fee_of_bank`, `sizes`, `colors`, `storage`, `quantities`, `productimage`, `video`, `modleurl_3d`, `offer_title`, `offerdescription`, `fqa_of_offfer`, `how_to_claim_of_oofer`, `term_nd_condition_of_offer`, `banks_for_emi`, `what_coverd_in_warrinty`, `warrinty_of_months`, `some_information_of_warrinty_and_provider`, `product_reviews`, `reviewa_username`, `profileurl`, `time_of_reviewing`, `extraimage_for_information_of_product`, `product_all_images`, `product_all_videos`, `lenght`, `breeght`, `height`, `weight`, `sub_category`, `location_blocked_by_chroist_metaverse`) VALUES
(2, 'inn', '', 'p.locations', 3, 1.1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'inn', '', 'p.locations', 3, 1.1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL),
(4, NULL, 'dds', NULL, 0, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `metaverse_memo_url`
--

CREATE TABLE `metaverse_memo_url` (
  `id` int(11) NOT NULL,
  `metaverse_Image_url` varchar(200) NOT NULL,
  `metaverse_video_url` varchar(200) NOT NULL,
  `user_id` int(11) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `isFaviraet` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `metaverse_memo_url`
--

INSERT INTO `metaverse_memo_url` (`id`, `metaverse_Image_url`, `metaverse_video_url`, `user_id`, `timestemp`, `isFaviraet`) VALUES
(2, 'd', 'sds', 0, '2022-08-18 15:51:30', 1),
(3, 'd', 'sds', 0, '2022-08-18 15:51:53', 1);

-- --------------------------------------------------------

--
-- Table structure for table `metaverse_my_events_theater_tickets`
--

CREATE TABLE `metaverse_my_events_theater_tickets` (
  `id` int(11) NOT NULL,
  `event_theater_name` varchar(100) NOT NULL,
  `land_location` varchar(100) NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `metaverse_my_events_theater_tickets`
--

INSERT INTO `metaverse_my_events_theater_tickets` (`id`, `event_theater_name`, `land_location`, `start_date`, `end_date`) VALUES
(1, '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

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
  `user_id` int(11) DEFAULT NULL,
  `tag` varchar(200) DEFAULT NULL,
  `location` varchar(200) DEFAULT NULL,
  `isarchive` varchar(200) DEFAULT NULL,
  `vieware_name_time_of_whatching` varchar(200) DEFAULT NULL,
  `vieware_profile_url` varchar(200) DEFAULT NULL,
  `iare_bio` varchar(200) DEFAULT NULL,
  `user_location_of_uploading` varchar(200) DEFAULT NULL,
  `quiz_user_iploading_intreste` varchar(200) DEFAULT NULL,
  `metaverse_post_viewing_time` varchar(200) DEFAULT NULL,
  `location_blocked_by_chroist_metaverse` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `metaverse_post`
--

INSERT INTO `metaverse_post` (`id`, `url`, `description`, `feeling_count`, `comment_count`, `username`, `timestemp`, `feeling_icon_urls`, `view_type`, `post_type`, `views_count`, `share_count`, `like_count`, `exclude_user`, `user_id`, `tag`, `location`, `isarchive`, `vieware_name_time_of_whatching`, `vieware_profile_url`, `iare_bio`, `user_location_of_uploading`, `quiz_user_iploading_intreste`, `metaverse_post_viewing_time`, `location_blocked_by_chroist_metaverse`) VALUES
(1, 'dasdas', 'sadads', 0, 0, 'sada', '2022-04-13 02:38:36', NULL, '0', '0', 0, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'frfer', 'erer', 0, 0, 'rere', '2022-08-18 16:21:46', 'erer', '0', '0', 0, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

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
  `avatar_url` varchar(400) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `tag` varchar(200) NOT NULL,
  `location` varchar(200) NOT NULL,
  `isarchive` varchar(200) NOT NULL,
  `vieware_name` varchar(200) NOT NULL,
  `vieware_name_age` varchar(200) NOT NULL,
  `vieware_user_name` varchar(200) NOT NULL,
  `vieware_name_time_of_whatching` varchar(200) NOT NULL,
  `vieware_profile_url` varchar(200) DEFAULT NULL,
  `iare_bio` varchar(200) DEFAULT NULL,
  `vieware_intreste` varchar(200) DEFAULT NULL,
  `user_location_of_uploading` varchar(200) DEFAULT NULL,
  `quiz_user_iploading_intreste` varchar(200) DEFAULT NULL,
  `metaverse_smachup_viewing_time` varchar(200) DEFAULT NULL,
  `location_blocked_by_chroist_metaverse` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `metaverse_smachup`
--

INSERT INTO `metaverse_smachup` (`id`, `video_url`, `auto_comment`, `post_type`, `description`, `title`, `timestemp`, `username`, `profile_pic`, `feeling_url`, `like_count`, `comment_count`, `views_count`, `share_count`, `exclude_user`, `isAds`, `avatar_url`, `user_id`, `tag`, `location`, `isarchive`, `vieware_name`, `vieware_name_age`, `vieware_user_name`, `vieware_name_time_of_whatching`, `vieware_profile_url`, `iare_bio`, `vieware_intreste`, `user_location_of_uploading`, `quiz_user_iploading_intreste`, `metaverse_smachup_viewing_time`, `location_blocked_by_chroist_metaverse`) VALUES
(2, 'dss', '', '', '', '', '0000-00-00 00:00:00', '', '', '', 0, 0, 0, 0, '', 0, '', NULL, '', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

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
  `off_percentage` float NOT NULL,
  `Keywords_sellerorgin` varchar(50) DEFAULT NULL,
  `sellerprofilrname` varchar(50) DEFAULT NULL,
  `manufacturerby` int(11) DEFAULT NULL,
  `importedby` int(11) DEFAULT NULL,
  `packedby` int(11) DEFAULT NULL,
  `genricname` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `metaverse_thing_shop`
--

INSERT INTO `metaverse_thing_shop` (`id`, `name`, `description`, `mrp`, `product_count`, `seeling_prise`, `rating`, `modle_3d`, `off_percentage`, `Keywords_sellerorgin`, `sellerprofilrname`, `manufacturerby`, `importedby`, `packedby`, `genricname`) VALUES
(1, 'dss', 'dsds', 4, 4, 4, 4, 'qq4', 4, NULL, NULL, NULL, NULL, NULL, NULL),
(2, '', '', 0, 0, 0, 0, '', 0, '', '', 0, 0, 0, ''),
(3, '', '', 0, 0, 0, 0, '', 0, '', '', 0, 0, 0, '');

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
  `isAds` int(11) NOT NULL DEFAULT 0,
  `international_delivery_charges` float DEFAULT NULL,
  `Keywords` varchar(200) DEFAULT NULL,
  `sellerorgin` varchar(50) DEFAULT NULL,
  `sellerprofilrname` varchar(50) DEFAULT NULL,
  `manufacturerby` int(11) DEFAULT NULL,
  `importedby` int(11) DEFAULT NULL,
  `packedby` int(11) DEFAULT NULL,
  `genricname` varchar(50) DEFAULT NULL,
  `video` varchar(100) DEFAULT NULL,
  `local_delivery_charges` float DEFAULT NULL,
  `zonal_delivery` varchar(10) DEFAULT NULL,
  `national_delivery_charges` float DEFAULT NULL,
  `payment_deatels` varchar(100) DEFAULT NULL,
  `last_date_of_return` varchar(100) DEFAULT NULL,
  `exchangeavableonuserlocation` varchar(100) DEFAULT NULL,
  `daydelevery` varchar(100) DEFAULT NULL,
  `exchange_and_save_up_to_money` varchar(100) DEFAULT NULL,
  `emi_of_paylatter_money` varchar(100) DEFAULT NULL,
  `intreste_of_emi` varchar(100) DEFAULT NULL,
  `emimoney` varchar(100) DEFAULT NULL,
  `emi_of_month` varchar(100) DEFAULT NULL,
  `interest` varchar(100) DEFAULT NULL,
  `processing_fee_of_bank` varchar(100) DEFAULT NULL,
  `sizes` float DEFAULT NULL,
  `colors` float DEFAULT NULL,
  `storge` float DEFAULT NULL,
  `quantities` int(11) DEFAULT NULL,
  `productimage` varchar(100) DEFAULT NULL,
  `modleurl_3d` varchar(100) DEFAULT NULL,
  `offer_title` varchar(100) DEFAULT NULL,
  `offerdescription` varchar(100) DEFAULT NULL,
  `fqa_of_offfer` varchar(100) DEFAULT NULL,
  `how_to_claim_of_oofer` varchar(100) DEFAULT NULL,
  `term_nd_condition_of_offer` varchar(100) DEFAULT NULL,
  `banks_for_emi` varchar(100) DEFAULT NULL,
  `what_coverd_in_warrinty` varchar(100) DEFAULT NULL,
  `what_not_covered_in_warrinty` varchar(100) DEFAULT NULL,
  `warrinty_of_months` varchar(100) DEFAULT NULL,
  `product_all_images` varchar(100) DEFAULT NULL,
  `product_all_videos` varchar(100) DEFAULT NULL,
  `some_information_of_warrinty_and_provider` varchar(100) DEFAULT NULL,
  `extraimage_for_information_of_product` varchar(100) DEFAULT NULL,
  `lenght` float DEFAULT NULL,
  `location_blocked_by_chroist_metaverse` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `metaverse_token_shop`
--

INSERT INTO `metaverse_token_shop` (`id`, `image`, `name`, `token_type`, `token_location`, `token_price`, `timestemp`, `isAds`, `international_delivery_charges`, `Keywords`, `sellerorgin`, `sellerprofilrname`, `manufacturerby`, `importedby`, `packedby`, `genricname`, `video`, `local_delivery_charges`, `zonal_delivery`, `national_delivery_charges`, `payment_deatels`, `last_date_of_return`, `exchangeavableonuserlocation`, `daydelevery`, `exchange_and_save_up_to_money`, `emi_of_paylatter_money`, `intreste_of_emi`, `emimoney`, `emi_of_month`, `interest`, `processing_fee_of_bank`, `sizes`, `colors`, `storge`, `quantities`, `productimage`, `modleurl_3d`, `offer_title`, `offerdescription`, `fqa_of_offfer`, `how_to_claim_of_oofer`, `term_nd_condition_of_offer`, `banks_for_emi`, `what_coverd_in_warrinty`, `what_not_covered_in_warrinty`, `warrinty_of_months`, `product_all_images`, `product_all_videos`, `some_information_of_warrinty_and_provider`, `extraimage_for_information_of_product`, `lenght`, `location_blocked_by_chroist_metaverse`) VALUES
(2, 'adadf', 'nn', 'tt', 'jh', 0.1, '2022-04-09 15:56:56', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'erw', 'nn', 'tt', 'jh', 0.1, '2022-04-09 10:26:56', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `metaverse_worlds`
--

CREATE TABLE `metaverse_worlds` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `url` varchar(100) DEFAULT NULL,
  `modle_3d` varchar(100) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `size_unit` varchar(10) DEFAULT NULL,
  `feeling_count` int(11) DEFAULT NULL,
  `photo_multi` varchar(400) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `metaverse_worlds`
--

INSERT INTO `metaverse_worlds` (`id`, `name`, `url`, `modle_3d`, `size`, `size_unit`, `feeling_count`, `photo_multi`, `description`, `timestemp`) VALUES
(1, '', '', '', 0, '', 0, '', '', '2022-04-26 03:10:04');

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
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `shareing` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `url`, `name`, `description`, `category`, `off_percantage`, `rent_price`, `bying_price`, `timestemp`, `shareing`) VALUES
(2, ' 1 url', 'p.name', 'p.description', 'p.category', 2, 1, 1, '2022-08-14 13:13:19', ''),
(3, 'p.url', 'p.name', 'p.description', 'p.category', 2, 1, 1, '2022-04-09 16:31:55', '');

-- --------------------------------------------------------

--
-- Table structure for table `my_collecting`
--

CREATE TABLE `my_collecting` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `collection_name` varchar(100) DEFAULT NULL,
  `type` varchar(40) DEFAULT NULL,
  `collection` varchar(400) DEFAULT NULL,
  `image` varchar(400) DEFAULT NULL,
  `no_of_item` int(11) DEFAULT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `my_collecting`
--

INSERT INTO `my_collecting` (`id`, `user_id`, `collection_name`, `type`, `collection`, `image`, `no_of_item`, `timestemp`) VALUES
(1, 0, '', '', '', '', 0, '2022-04-13 14:45:57'),
(2, 0, '', '', '', '', 0, '2022-04-13 14:48:11');

-- --------------------------------------------------------

--
-- Table structure for table `my_intreste_senstive_brand_my_intrest`
--

CREATE TABLE `my_intreste_senstive_brand_my_intrest` (
  `id` int(11) NOT NULL,
  `brandname` varchar(80) NOT NULL,
  `brand_logo` varchar(100) NOT NULL,
  `sendtive_name` varchar(80) DEFAULT NULL,
  `senstive_logo` varchar(80) DEFAULT NULL,
  `my_intreste_name` varchar(80) DEFAULT NULL,
  `my_intreste_logo` varchar(80) DEFAULT NULL,
  `brand_seletected_or_not` int(11) DEFAULT NULL,
  `senstive_selected_or_not` int(11) DEFAULT NULL,
  `my_intreste_selected_or_not` int(11) DEFAULT NULL,
  `my_intreste_for_changename` varchar(80) DEFAULT NULL,
  `my_intreste_for_changename_logo` varchar(80) DEFAULT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `active` int(11) NOT NULL DEFAULT 1,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `my_intreste_senstive_brand_my_intrest`
--

INSERT INTO `my_intreste_senstive_brand_my_intrest` (`id`, `brandname`, `brand_logo`, `sendtive_name`, `senstive_logo`, `my_intreste_name`, `my_intreste_logo`, `brand_seletected_or_not`, `senstive_selected_or_not`, `my_intreste_selected_or_not`, `my_intreste_for_changename`, `my_intreste_for_changename_logo`, `timestemp`, `active`, `user_id`) VALUES
(1, 'Afas ', '', '', '', '', '', 0, 0, 0, '', '', '2022-07-30 17:15:08', 0, 1),
(2, 'asdsa sad sad', '', '', '', '', '', 0, 0, 0, '', '', '2022-07-30 17:15:19', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `my_story_memo`
--

CREATE TABLE `my_story_memo` (
  `id` int(11) NOT NULL,
  `story_url` varchar(200) NOT NULL,
  `is_archive` int(11) DEFAULT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `my_story_memo`
--

INSERT INTO `my_story_memo` (`id`, `story_url`, `is_archive`, `timestemp`) VALUES
(1, '', 1, '2022-05-28 17:02:23');

-- --------------------------------------------------------

--
-- Table structure for table `my_things_metaverse`
--

CREATE TABLE `my_things_metaverse` (
  `id` int(11) NOT NULL,
  `username` varchar(80) NOT NULL,
  `name` varchar(80) NOT NULL,
  `avatar_url` varchar(80) DEFAULT NULL,
  `profile_url` varchar(80) DEFAULT NULL,
  `pet_name` varchar(80) DEFAULT NULL,
  `pet_price` float DEFAULT NULL,
  `pet_price_buy_off_percentage` float DEFAULT NULL,
  `pet_url` varchar(80) DEFAULT NULL,
  `pet_order_id` int(11) DEFAULT NULL,
  `vechile_name` varchar(80) DEFAULT NULL,
  `vechile_price` float DEFAULT NULL,
  `vechile_price_buy_off_percentage` int(11) DEFAULT NULL,
  `vechile_url` varchar(80) DEFAULT NULL,
  `vechile_order_id` int(11) DEFAULT NULL,
  `land_name` varchar(80) DEFAULT NULL,
  `land_price` float DEFAULT NULL,
  `land_price_buy_off_percentage` float DEFAULT NULL,
  `land_url` varchar(80) DEFAULT NULL,
  `land_order_id` int(11) DEFAULT NULL,
  `token_name` varchar(80) DEFAULT NULL,
  `token_price` float DEFAULT NULL,
  `token_price_buy_off_percentage` float DEFAULT NULL,
  `token_url` varchar(80) DEFAULT NULL,
  `token_order_id` int(11) DEFAULT NULL,
  `added_by` int(11) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `my_things_metaverse`
--

INSERT INTO `my_things_metaverse` (`id`, `username`, `name`, `avatar_url`, `profile_url`, `pet_name`, `pet_price`, `pet_price_buy_off_percentage`, `pet_url`, `pet_order_id`, `vechile_name`, `vechile_price`, `vechile_price_buy_off_percentage`, `vechile_url`, `vechile_order_id`, `land_name`, `land_price`, `land_price_buy_off_percentage`, `land_url`, `land_order_id`, `token_name`, `token_price`, `token_price_buy_off_percentage`, `token_url`, `token_order_id`, `added_by`, `active`, `timestemp`, `user_id`) VALUES
(1, '', '', '', '', '', 0, 0, '', 0, '', 0, 0, '', 0, '', 0, 0, '', 0, '', 0, 0, '', 0, 0, 0, '2022-07-30 17:59:40', 0);

-- --------------------------------------------------------

--
-- Table structure for table `pay_later`
--

CREATE TABLE `pay_later` (
  `id` int(11) NOT NULL,
  `productname` varchar(50) NOT NULL,
  `stutus_of_payment` int(11) NOT NULL,
  `payment_no` varchar(15) NOT NULL,
  `currency` varchar(10) NOT NULL,
  `amount` float NOT NULL,
  `day_month_year` datetime NOT NULL,
  `finefee` float NOT NULL,
  `payment_last_date` datetime NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) NOT NULL,
  `comment` varchar(500) DEFAULT NULL,
  `payed_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `user_id` int(11) DEFAULT NULL,
  `tag` varchar(200) DEFAULT NULL,
  `location` varchar(200) DEFAULT NULL,
  `isarchive` varchar(200) DEFAULT NULL,
  `vieware_name_time_of_whatching` varchar(200) DEFAULT NULL,
  `vieware_profile_url` varchar(200) DEFAULT NULL,
  `iare_bio` varchar(200) DEFAULT NULL,
  `vieware_intreste` varchar(200) DEFAULT NULL,
  `user_location_of_uploading` varchar(200) DEFAULT NULL,
  `quiz_user_iploading_intreste` varchar(200) DEFAULT NULL,
  `post_viewing_time` varchar(200) DEFAULT NULL,
  `location_blocked_by_chroist_metaverse` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `url`, `description`, `feeling_count`, `comment_count`, `username`, `timestemp`, `feeling_icon_urls`, `view_type`, `views_count`, `share_count`, `like_count`, `exclude_user`, `user_id`, `tag`, `location`, `isarchive`, `vieware_name_time_of_whatching`, `vieware_profile_url`, `iare_bio`, `vieware_intreste`, `user_location_of_uploading`, `quiz_user_iploading_intreste`, `post_viewing_time`, `location_blocked_by_chroist_metaverse`) VALUES
(1, 'assd', 'assa', 0, 0, 'ass', '2022-04-12 16:55:10', NULL, '0', 0, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, '2', '', 0, 0, '', '2022-04-12 17:01:46', '', '', 0, 0, 0, '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'assd', 'assa', 0, 0, 'ass', '2022-08-14 13:25:59', NULL, '0', 0, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `process_image_video_audio_sugestion`
--

CREATE TABLE `process_image_video_audio_sugestion` (
  `id` int(11) NOT NULL,
  `url` varchar(400) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL COMMENT 'Vidoe , image , audio url',
  `user_id` int(11) DEFAULT NULL,
  `timestemp` timestamp NULL DEFAULT current_timestamp(),
  `web_broweser_history` varchar(400) DEFAULT NULL,
  `scorlling_speed` varchar(200) DEFAULT NULL,
  `user_gallery` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `process_image_video_audio_sugestion`
--

INSERT INTO `process_image_video_audio_sugestion` (`id`, `url`, `type`, `user_id`, `timestemp`, `web_broweser_history`, `scorlling_speed`, `user_gallery`) VALUES
(1, NULL, NULL, NULL, '2022-08-18 16:20:32', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `relation`
--

CREATE TABLE `relation` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `relation`
--

INSERT INTO `relation` (`id`, `name`, `timestemp`) VALUES
(1, '', '2022-05-28 16:54:04'),
(2, '', '2022-05-28 16:54:04'),
(3, '', '2022-05-28 16:54:04');

-- --------------------------------------------------------

--
-- Table structure for table `report_reason`
--

CREATE TABLE `report_reason` (
  `id` int(11) NOT NULL,
  `report_reason` varchar(500) NOT NULL,
  `reportedposturl` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `title` varchar(200) DEFAULT NULL,
  `teimwstemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `report_reason`
--

INSERT INTO `report_reason` (`id`, `report_reason`, `reportedposturl`, `description`, `title`, `teimwstemp`, `user_id`) VALUES
(1, 'dasda ', NULL, NULL, NULL, '2022-08-14 12:42:10', 1),
(2, 'dasda ', NULL, NULL, NULL, '2022-08-14 12:51:57', 1);

-- --------------------------------------------------------

--
-- Table structure for table `seller_auth`
--

CREATE TABLE `seller_auth` (
  `id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `email` varchar(80) NOT NULL,
  `address` varchar(150) DEFAULT NULL,
  `otp` varchar(11) DEFAULT NULL,
  `gstno_for_india` varchar(40) DEFAULT NULL,
  `identity` varchar(11) DEFAULT NULL,
  `timestemp` timestamp NULL DEFAULT current_timestamp(),
  `active` int(11) NOT NULL DEFAULT 0,
  `seller_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seller_auth`
--

INSERT INTO `seller_auth` (`id`, `name`, `email`, `address`, `otp`, `gstno_for_india`, `identity`, `timestemp`, `active`, `seller_id`) VALUES
(1, '', '', '', '', '', '', '2022-07-30 17:20:15', 0, 1),
(2, 'a1', '', '', '0', '', '', '2022-07-30 17:20:25', 0, 1),
(3, 'a1', '', '', '0', '', '', '2022-07-30 17:20:50', 0, 2);

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
  `images` varchar(400) DEFAULT NULL,
  `Keywords` varchar(200) DEFAULT NULL,
  `sellerorgin` varchar(50) DEFAULT NULL,
  `sellerprofilrname` varchar(50) DEFAULT NULL,
  `manufacturerby` int(11) DEFAULT NULL,
  `importedby` int(11) DEFAULT NULL,
  `packedby` int(11) DEFAULT NULL,
  `genricname` varchar(50) DEFAULT NULL,
  `video` varchar(100) DEFAULT NULL,
  `local_delivery_charges` float DEFAULT NULL,
  `zonal_delivery` varchar(10) DEFAULT NULL,
  `national_delivery_charges` float DEFAULT NULL,
  `international_delivery_charges` float DEFAULT NULL,
  `payment_deatels` varchar(100) DEFAULT NULL,
  `last_date_of_return` varchar(100) DEFAULT NULL,
  `exchangeavableonuserlocation` varchar(100) DEFAULT NULL,
  `daydelevery` varchar(100) DEFAULT NULL,
  `exchange_and_save_up_to_money` varchar(100) DEFAULT NULL,
  `emi_of_paylatter_money` varchar(100) DEFAULT NULL,
  `emi_of_month` varchar(100) DEFAULT NULL,
  `intreste_of_emi` varchar(100) DEFAULT NULL,
  `interest` varchar(100) DEFAULT NULL,
  `processing_fee_of_bank` varchar(100) DEFAULT NULL,
  `sizes` varchar(100) DEFAULT NULL,
  `colors` varchar(100) DEFAULT NULL,
  `storage` varchar(100) DEFAULT NULL,
  `quantities` int(11) DEFAULT NULL,
  `productimage` varchar(100) DEFAULT NULL,
  `modleurl_3d` varchar(100) DEFAULT NULL,
  `offer_title` varchar(100) DEFAULT NULL,
  `offerdescription` varchar(100) DEFAULT NULL,
  `fqa_of_offfer` varchar(100) DEFAULT NULL,
  `how_to_claim_of_oofer` varchar(100) DEFAULT NULL,
  `term_nd_condition_of_offer` varchar(100) DEFAULT NULL,
  `banks_for_emi` varchar(100) DEFAULT NULL,
  `what_coverd_in_warrinty` varchar(100) DEFAULT NULL,
  `what_not_covered_in_warrinty` varchar(100) DEFAULT NULL,
  `warrinty_of_months` varchar(100) DEFAULT NULL,
  `some_information_of_warrinty_and_provider` varchar(100) DEFAULT NULL,
  `product_reviews` varchar(100) DEFAULT NULL,
  `product_all_images` varchar(100) DEFAULT NULL,
  `product_all_videos` varchar(100) DEFAULT NULL,
  `reviewa_username` varchar(100) DEFAULT NULL,
  `profileurl` varchar(100) DEFAULT NULL,
  `time_of_reviewing` varchar(100) DEFAULT NULL,
  `extraimage_for_information_of_product` varchar(100) DEFAULT NULL,
  `payment_options` varchar(100) DEFAULT NULL,
  `length` float DEFAULT NULL,
  `breeght` float DEFAULT NULL,
  `height` float DEFAULT NULL,
  `weight` float DEFAULT NULL,
  `sub_category` varchar(100) DEFAULT NULL,
  `location_blocked_by_chroist_metaverse` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shops`
--

INSERT INTO `shops` (`id`, `category_id`, `name`, `off_percentage`, `shop_count`, `remaining_shop_count`, `descripting`, `mrp`, `selling_price`, `icon_image`, `reating`, `isAds`, `isRent`, `time_of_rent`, `timestemp`, `images`, `Keywords`, `sellerorgin`, `sellerprofilrname`, `manufacturerby`, `importedby`, `packedby`, `genricname`, `video`, `local_delivery_charges`, `zonal_delivery`, `national_delivery_charges`, `international_delivery_charges`, `payment_deatels`, `last_date_of_return`, `exchangeavableonuserlocation`, `daydelevery`, `exchange_and_save_up_to_money`, `emi_of_paylatter_money`, `emi_of_month`, `intreste_of_emi`, `interest`, `processing_fee_of_bank`, `sizes`, `colors`, `storage`, `quantities`, `productimage`, `modleurl_3d`, `offer_title`, `offerdescription`, `fqa_of_offfer`, `how_to_claim_of_oofer`, `term_nd_condition_of_offer`, `banks_for_emi`, `what_coverd_in_warrinty`, `what_not_covered_in_warrinty`, `warrinty_of_months`, `some_information_of_warrinty_and_provider`, `product_reviews`, `product_all_images`, `product_all_videos`, `reviewa_username`, `profileurl`, `time_of_reviewing`, `extraimage_for_information_of_product`, `payment_options`, `length`, `breeght`, `height`, `weight`, `sub_category`, `location_blocked_by_chroist_metaverse`) VALUES
(2, 1, 'name', 2, NULL, 0, '', 1, 3, '', 1, 0, 0, '0', '2022-04-09 14:41:00', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 1, 'name', 2, 0, 0, '', 1, 3, '', 1, 0, 0, NULL, '2022-04-09 14:41:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 1, 'name', 2, 0, 0, '', 1, 3, '', 1, 0, 0, '0', '2022-04-09 15:07:36', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 1, 'name', 2, 0, 0, '', 1, 3, '', 1, 0, 0, '0', '2022-04-09 15:16:27', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 1, 'name', 2, 0, 0, '', 1, 3, '', 1, 0, 0, '0', '2022-04-12 15:36:13', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 0, '', 0, 0, 0, '', 0, 0, '', 0, 0, 0, '', '0000-00-00 00:00:00', '', '', '', '', 0, 0, 0, '', '', 0, '', 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, 0, '', 0, 0, 0, '', 0, 0, '', 0, 0, 0, '', '0000-00-00 00:00:00', '', '', '', '', 0, 0, 0, '', '', 0, '', 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `shop_category`
--

CREATE TABLE `shop_category` (
  `id` int(11) NOT NULL,
  `title` varchar(300) DEFAULT NULL,
  `categoryimage` varchar(200) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shop_category`
--

INSERT INTO `shop_category` (`id`, `title`, `categoryimage`, `timestemp`) VALUES
(1, 'shop_category', 'shop_category 1', '2022-08-14 12:42:40'),
(2, 'shop_category', 'shop_category 1', '2022-08-14 12:54:50'),
(3, 'shop_category', 'shop_category 1', '2022-08-14 12:55:11');

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
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `Keywords` varchar(200) DEFAULT NULL,
  `sellerorgin` varchar(50) DEFAULT NULL,
  `sellerprofilrname` varchar(50) DEFAULT NULL,
  `manufacturerby` int(11) DEFAULT NULL,
  `importedby` int(11) DEFAULT NULL,
  `packedby` int(11) DEFAULT NULL,
  `genricname` varchar(50) DEFAULT NULL,
  `video` varchar(100) DEFAULT NULL,
  `local_delivery_charges` float DEFAULT NULL,
  `zonal_delivery` varchar(10) DEFAULT NULL,
  `national_delivery_charges` float DEFAULT NULL,
  `international_delivery_charges` float DEFAULT NULL,
  `payment_deatels` varchar(100) DEFAULT NULL,
  `last_date_of_return` varchar(100) DEFAULT NULL,
  `exchangeavableonuserlocation` varchar(100) DEFAULT NULL,
  `daydelevery` varchar(100) DEFAULT NULL,
  `exchange_and_save_up_to_money` varchar(100) DEFAULT NULL,
  `emi_of_paylatter_money` varchar(100) DEFAULT NULL,
  `emi_of_month` varchar(100) DEFAULT NULL,
  `intreste_of_emi` varchar(100) DEFAULT NULL,
  `emimoney` varchar(100) DEFAULT NULL,
  `interest` varchar(100) DEFAULT NULL,
  `processing_fee_of_bank` varchar(100) DEFAULT NULL,
  `sizes` float DEFAULT NULL,
  `colors` varchar(100) DEFAULT NULL,
  `storage` varchar(100) DEFAULT NULL,
  `quantities` int(11) DEFAULT NULL,
  `productimage` varchar(100) DEFAULT NULL,
  `modleurl_3d` varchar(100) DEFAULT NULL,
  `offer_title` varchar(100) DEFAULT NULL,
  `offerdescription` varchar(100) DEFAULT NULL,
  `fqa_of_offfer` varchar(100) DEFAULT NULL,
  `how_to_claim_of_oofer` varchar(100) DEFAULT NULL,
  `term_nd_condition_of_offer` varchar(100) DEFAULT NULL,
  `banks_for_emi` varchar(100) DEFAULT NULL,
  `what_coverd_in_warrinty` varchar(100) DEFAULT NULL,
  `what_not_covered_in_warrinty` varchar(100) DEFAULT NULL,
  `warrinty_of_months` varchar(100) DEFAULT NULL,
  `some_information_of_warrinty_and_provider` varchar(100) DEFAULT NULL,
  `product_reviews` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shop_rent_item`
--

INSERT INTO `shop_rent_item` (`id`, `name`, `product_count`, `time_of_rent`, `off_percentage`, `descripting`, `mrp`, `selling_price`, `icon_image`, `reating`, `count`, `remaining_count`, `isAds`, `timestemp`, `Keywords`, `sellerorgin`, `sellerprofilrname`, `manufacturerby`, `importedby`, `packedby`, `genricname`, `video`, `local_delivery_charges`, `zonal_delivery`, `national_delivery_charges`, `international_delivery_charges`, `payment_deatels`, `last_date_of_return`, `exchangeavableonuserlocation`, `daydelevery`, `exchange_and_save_up_to_money`, `emi_of_paylatter_money`, `emi_of_month`, `intreste_of_emi`, `emimoney`, `interest`, `processing_fee_of_bank`, `sizes`, `colors`, `storage`, `quantities`, `productimage`, `modleurl_3d`, `offer_title`, `offerdescription`, `fqa_of_offfer`, `how_to_claim_of_oofer`, `term_nd_condition_of_offer`, `banks_for_emi`, `what_coverd_in_warrinty`, `what_not_covered_in_warrinty`, `warrinty_of_months`, `some_information_of_warrinty_and_provider`, `product_reviews`) VALUES
(1, 'sads ad', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2022-08-14 13:14:57', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'd d d ', 0, '', 0, '', 0, 0, '', 0, 0, 0, 0, '0000-00-00 00:00:00', '', '', '', 0, 0, 0, '', '', 0, '', 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'sads ad', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2022-08-14 13:15:02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `shop_search_history`
--

CREATE TABLE `shop_search_history` (
  `id` int(11) NOT NULL,
  `search_title` varchar(100) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shop_search_history`
--

INSERT INTO `shop_search_history` (`id`, `search_title`, `user_id`, `timestemp`) VALUES
(1, 'sd asd as', 1, '2022-08-14 12:42:57'),
(2, 'sd asd as', 1, '2022-08-14 12:57:15');

-- --------------------------------------------------------

--
-- Table structure for table `show_theaters_event`
--

CREATE TABLE `show_theaters_event` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `start_date_time` datetime DEFAULT NULL,
  `end_data_time` datetime DEFAULT NULL,
  `ticket_price` float DEFAULT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `active` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `show_theaters_event`
--

INSERT INTO `show_theaters_event` (`id`, `name`, `description`, `location`, `start_date_time`, `end_data_time`, `ticket_price`, `timestemp`, `active`) VALUES
(1, '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, '2022-04-26 03:03:14', 0);

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
  `share_count` int(11) NOT NULL DEFAULT 0,
  `like_count` int(11) NOT NULL DEFAULT 0,
  `view_type` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `tag` varchar(100) DEFAULT NULL,
  `isarchive` varchar(100) DEFAULT NULL,
  `user_location_of_uploading` varchar(100) DEFAULT NULL,
  `quiz_user_iploading_intreste` varchar(100) DEFAULT NULL,
  `location_blocked_by_chroist_metaverse` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `smachup`
--

INSERT INTO `smachup` (`id`, `url`, `title`, `descriptions`, `views_count`, `feeling_count`, `comment_counts`, `feeling_icon_url`, `username`, `time_of_uploading`, `time_of_video`, `profile_url`, `exclude_user`, `share_count`, `like_count`, `view_type`, `user_id`, `tag`, `isarchive`, `user_location_of_uploading`, `quiz_user_iploading_intreste`, `location_blocked_by_chroist_metaverse`) VALUES
(1, 'asdd', '', '', 0, 0, 0, '', '', '0000-00-00 00:00:00', '', '', 0, 0, 0, 0, 0, NULL, NULL, NULL, NULL, NULL),
(2, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2022-04-13 02:12:31', NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, NULL, NULL, NULL),
(3, 'asdd', '', '', 0, 0, 0, '', '', '0000-00-00 00:00:00', '', '', 0, 0, 0, 0, 0, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `stickers`
--

CREATE TABLE `stickers` (
  `id` int(11) NOT NULL,
  `stickers` varchar(200) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `timestemp` timestamp NULL DEFAULT current_timestamp(),
  `is_payed` int(11) DEFAULT NULL,
  `price` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stickers`
--

INSERT INTO `stickers` (`id`, `stickers`, `url`, `timestemp`, `is_payed`, `price`) VALUES
(1, NULL, NULL, '2022-04-13 15:18:58', NULL, NULL),
(2, '', '', '2022-04-13 15:20:15', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `stories`
--

CREATE TABLE `stories` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `image_vedio` varchar(100) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `text_msg` varchar(100) DEFAULT NULL,
  `exclude_user` varchar(400) DEFAULT NULL,
  `story_type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stories`
--

INSERT INTO `stories` (`id`, `user_id`, `image_vedio`, `url`, `timestemp`, `text_msg`, `exclude_user`, `story_type`) VALUES
(1, NULL, NULL, NULL, '2022-04-13 14:30:58', NULL, NULL, ''),
(2, NULL, NULL, NULL, '2022-08-18 15:46:10', NULL, NULL, '');

-- --------------------------------------------------------

--
-- Table structure for table `subscribe`
--

CREATE TABLE `subscribe` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `subscriber` int(11) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tv_search_history`
--

CREATE TABLE `tv_search_history` (
  `id` int(11) NOT NULL,
  `search_title` varchar(100) NOT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tv_search_history`
--

INSERT INTO `tv_search_history` (`id`, `search_title`, `timestemp`, `user_id`) VALUES
(1, '0 sfsd', '2022-08-14 12:43:34', 1),
(2, '0', '2022-08-14 12:59:14', NULL),
(3, '0df d', '2022-08-14 12:59:19', NULL);

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
(1, 'test', 'test', '', 'test@gmail.com', '123456', '', '', '', '', '', 0, 0, 0, 0, 22907),
(2, 'test', 'test', '', 'test@gmail.com', '12345', '', '', '', '', '', 0, 0, 0, 0, NULL),
(3, 'test', 'test', '1', 'test2@gmail.com', '12345', '1', '', '', '', '', 0, 0, 0, 0, NULL),
(4, 'test', 'test', '', 'test@gmail.com', '12345', '', '', '', '', '', 0, 0, 0, 0, NULL),
(5, 'test', 'test', '1', 'test3@gmail.com', '12345', '1', '', '', '', '', 0, 0, 0, 0, NULL),
(6, 'test', 'test', '1', 'test3@gmail.com', '12345', '1', '', '', '', '', 0, 0, 0, 0, NULL),
(7, 'test', 'test', '1', 'test3@gmail.com', '12345', '1', '', '', '', '', 0, 0, 0, 0, NULL),
(8, 'test', 'test', '1', 'test3@gmail.com', '12345', '1', '', '', '', '', 0, 0, 0, 0, NULL),
(9, 'test', 'test', '1', 'test3@gmail.com', '12345', '1', '', '', '', '', 0, 0, 0, 0, NULL),
(10, 'test', 'test', '1', 'test3@gmail.com', '12345', '1', '', '', '', '', 0, 0, 0, 0, NULL),
(11, 'nikhil', 'nikhil', NULL, 'nikhilmalani7777@gmail.com', '123456', '1', '', '', '', '', 0, 0, 0, 0, NULL),
(12, 'nikhil', 'nikhil', NULL, 'nikhilmalani7777@gmail.com', '123456', '1', '', '', '', '', 0, 0, 0, 0, NULL),
(13, 'nikhil', 'nikhil', NULL, 'nikhilmalani7777@gmail.com', '123456', '1', '', '', '', '', 0, 0, 0, 0, NULL),
(14, 'nikhil', 'nikhil', NULL, 'nikhilmalani7777@gmail.com', '123456', '1', '', '', '', '', 0, 0, 0, 0, NULL),
(15, 'nikhil', 'nikhil', NULL, 'nikhilmalani7777@gmail.com', '123456', '1', '', '', '', '', 0, 0, 0, 0, NULL),
(16, 'nikhil', 'nikhil', NULL, 'nikhilmalani7777@gmail.com', '123456', '1', '', '', '', '', 0, 0, 0, 0, NULL),
(17, 'nikhil', 'nikhil', NULL, 'nikhilmalani7777@gmail.com', '123456', '1', '', '', '', '', 0, 0, 0, 0, NULL),
(18, 'test', 'test', '1', 'test3@gmail.com', '12345', '1', '', '', '', '', 0, 0, 0, 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `vr_booking_online_api`
--

CREATE TABLE `vr_booking_online_api` (
  `id` int(11) NOT NULL,
  `time_which_booked` varchar(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `name` varchar(80) NOT NULL,
  `booked_period` varchar(11) DEFAULT NULL,
  `no_of_people` int(11) DEFAULT NULL,
  `under_age_of_14` float DEFAULT NULL,
  `booked` int(11) DEFAULT NULL,
  `canclled_or_not` int(11) DEFAULT NULL,
  `book_used_or_not` int(11) DEFAULT NULL,
  `rest_room_type` int(11) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  `timestemp` timestamp NULL DEFAULT current_timestamp(),
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vr_booking_online_api`
--

INSERT INTO `vr_booking_online_api` (`id`, `time_which_booked`, `username`, `name`, `booked_period`, `no_of_people`, `under_age_of_14`, `booked`, `canclled_or_not`, `book_used_or_not`, `rest_room_type`, `active`, `timestemp`, `user_id`) VALUES
(1, '', '', '', '9', 9, 0, 1, 0, 0, 5, 0, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `wallet`
--

CREATE TABLE `wallet` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `amount` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `wallet_transaction`
--

CREATE TABLE `wallet_transaction` (
  `id` int(11) NOT NULL,
  `transaction_id` varchar(15) DEFAULT NULL,
  `deposit_withdrawal` int(11) DEFAULT NULL,
  `amount` float DEFAULT 0,
  `final_amount` float DEFAULT 0,
  `status` int(11) DEFAULT NULL,
  `comment` varchar(100) DEFAULT NULL,
  `admin_Comment` varchar(100) DEFAULT NULL,
  `timestemp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accidental_facility_accident_messgae`
--
ALTER TABLE `accidental_facility_accident_messgae`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `accidental_facility_history`
--
ALTER TABLE `accidental_facility_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brand_approve`
--
ALTER TABLE `brand_approve`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `chroist_camp_go_deatels`
--
ALTER TABLE `chroist_camp_go_deatels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chroist_tv`
--
ALTER TABLE `chroist_tv`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exchange_tv_ac_refigartor_smart_phone_laptop_brands`
--
ALTER TABLE `exchange_tv_ac_refigartor_smart_phone_laptop_brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feeling_image`
--
ALTER TABLE `feeling_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `grocery_products`
--
ALTER TABLE `grocery_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hashtag`
--
ALTER TABLE `hashtag`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logout`
--
ALTER TABLE `logout`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metaverse_chroist_tv`
--
ALTER TABLE `metaverse_chroist_tv`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metaverse_formers_places`
--
ALTER TABLE `metaverse_formers_places`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metaverse_friends_request`
--
ALTER TABLE `metaverse_friends_request`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metaverse_games`
--
ALTER TABLE `metaverse_games`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metaverse_invite_collaborating_request`
--
ALTER TABLE `metaverse_invite_collaborating_request`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metaverse_land_shop`
--
ALTER TABLE `metaverse_land_shop`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metaverse_memo_url`
--
ALTER TABLE `metaverse_memo_url`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metaverse_my_events_theater_tickets`
--
ALTER TABLE `metaverse_my_events_theater_tickets`
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
-- Indexes for table `metaverse_worlds`
--
ALTER TABLE `metaverse_worlds`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `my_collecting`
--
ALTER TABLE `my_collecting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `my_intreste_senstive_brand_my_intrest`
--
ALTER TABLE `my_intreste_senstive_brand_my_intrest`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `my_story_memo`
--
ALTER TABLE `my_story_memo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `my_things_metaverse`
--
ALTER TABLE `my_things_metaverse`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pay_later`
--
ALTER TABLE `pay_later`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `process_image_video_audio_sugestion`
--
ALTER TABLE `process_image_video_audio_sugestion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `relation`
--
ALTER TABLE `relation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `report_reason`
--
ALTER TABLE `report_reason`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seller_auth`
--
ALTER TABLE `seller_auth`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shops`
--
ALTER TABLE `shops`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shop_category`
--
ALTER TABLE `shop_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shop_rent_item`
--
ALTER TABLE `shop_rent_item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shop_search_history`
--
ALTER TABLE `shop_search_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `show_theaters_event`
--
ALTER TABLE `show_theaters_event`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `smachup`
--
ALTER TABLE `smachup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stickers`
--
ALTER TABLE `stickers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stories`
--
ALTER TABLE `stories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscribe`
--
ALTER TABLE `subscribe`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tv_search_history`
--
ALTER TABLE `tv_search_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vr_booking_online_api`
--
ALTER TABLE `vr_booking_online_api`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallet`
--
ALTER TABLE `wallet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallet_transaction`
--
ALTER TABLE `wallet_transaction`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accidental_facility_accident_messgae`
--
ALTER TABLE `accidental_facility_accident_messgae`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `accidental_facility_history`
--
ALTER TABLE `accidental_facility_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `brand_approve`
--
ALTER TABLE `brand_approve`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `buy`
--
ALTER TABLE `buy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `buy_rent`
--
ALTER TABLE `buy_rent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `category_grocery_shop`
--
ALTER TABLE `category_grocery_shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `chroist_camp_go_deatels`
--
ALTER TABLE `chroist_camp_go_deatels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `chroist_tv`
--
ALTER TABLE `chroist_tv`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `exchange_tv_ac_refigartor_smart_phone_laptop_brands`
--
ALTER TABLE `exchange_tv_ac_refigartor_smart_phone_laptop_brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `feeling_image`
--
ALTER TABLE `feeling_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `followers`
--
ALTER TABLE `followers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `grocery_products`
--
ALTER TABLE `grocery_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `hashtag`
--
ALTER TABLE `hashtag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `logout`
--
ALTER TABLE `logout`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `metaverse_chroist_tv`
--
ALTER TABLE `metaverse_chroist_tv`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `metaverse_formers_places`
--
ALTER TABLE `metaverse_formers_places`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `metaverse_friends_request`
--
ALTER TABLE `metaverse_friends_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `metaverse_games`
--
ALTER TABLE `metaverse_games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `metaverse_invite_collaborating_request`
--
ALTER TABLE `metaverse_invite_collaborating_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `metaverse_land_shop`
--
ALTER TABLE `metaverse_land_shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `metaverse_memo_url`
--
ALTER TABLE `metaverse_memo_url`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `metaverse_my_events_theater_tickets`
--
ALTER TABLE `metaverse_my_events_theater_tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `metaverse_post`
--
ALTER TABLE `metaverse_post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `metaverse_shop`
--
ALTER TABLE `metaverse_shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `metaverse_smachup`
--
ALTER TABLE `metaverse_smachup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `metaverse_thing_shop`
--
ALTER TABLE `metaverse_thing_shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `metaverse_token_shop`
--
ALTER TABLE `metaverse_token_shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `metaverse_worlds`
--
ALTER TABLE `metaverse_worlds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `my_collecting`
--
ALTER TABLE `my_collecting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `my_intreste_senstive_brand_my_intrest`
--
ALTER TABLE `my_intreste_senstive_brand_my_intrest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `my_story_memo`
--
ALTER TABLE `my_story_memo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `my_things_metaverse`
--
ALTER TABLE `my_things_metaverse`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pay_later`
--
ALTER TABLE `pay_later`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `process_image_video_audio_sugestion`
--
ALTER TABLE `process_image_video_audio_sugestion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `relation`
--
ALTER TABLE `relation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `report_reason`
--
ALTER TABLE `report_reason`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `seller_auth`
--
ALTER TABLE `seller_auth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `shops`
--
ALTER TABLE `shops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `shop_category`
--
ALTER TABLE `shop_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `shop_rent_item`
--
ALTER TABLE `shop_rent_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `shop_search_history`
--
ALTER TABLE `shop_search_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `show_theaters_event`
--
ALTER TABLE `show_theaters_event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `smachup`
--
ALTER TABLE `smachup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `stickers`
--
ALTER TABLE `stickers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `stories`
--
ALTER TABLE `stories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `subscribe`
--
ALTER TABLE `subscribe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tv_search_history`
--
ALTER TABLE `tv_search_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `vr_booking_online_api`
--
ALTER TABLE `vr_booking_online_api`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `wallet`
--
ALTER TABLE `wallet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wallet_transaction`
--
ALTER TABLE `wallet_transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
