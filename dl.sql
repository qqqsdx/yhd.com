-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2020-07-27 16:02:54
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `my2003`
--

-- --------------------------------------------------------

--
-- 表的结构 `dl`
--

CREATE TABLE `dl` (
  `userID` int(10) NOT NULL,
  `username` varchar(255) NOT NULL,
  `userpass` varchar(255) NOT NULL,
  `iPhone` varchar(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `dl`
--

INSERT INTO `dl` (`userID`, `username`, `userpass`, `iPhone`) VALUES
(1001, '张三', '123456', '18705978713'),
(1011, '撒娇迪欧', '123456', '18888888888'),
(1025, 'nsdd', 'qqq123', '18456325984'),
(1029, '你是不是傻', 'a123456', '18756969856'),
(1030, '我去你个大憨批', 'qqq123456', '18756965962'),
(1031, '嗷嗷嗷嗷嗷', 'qqq123', '18752658695'),
(1032, 'aaaa', 'a123456', '13211111111');

--
-- 转储表的索引
--

--
-- 表的索引 `dl`
--
ALTER TABLE `dl`
  ADD PRIMARY KEY (`userID`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `dl`
--
ALTER TABLE `dl`
  MODIFY `userID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1034;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
