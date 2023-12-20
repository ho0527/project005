-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023-12-20 13:48:52
-- 伺服器版本： 10.4.27-MariaDB
-- PHP 版本： 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `project005`
--

-- --------------------------------------------------------

--
-- 資料表結構 `log`
--

CREATE TABLE `log` (
  `id` int(11) NOT NULL,
  `userid` text NOT NULL,
  `move` text NOT NULL,
  `movetime` text NOT NULL,
  `ps` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- 資料表結構 `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `coverurl` text NOT NULL,
  `title` text NOT NULL,
  `content` longtext NOT NULL,
  `tag` text NOT NULL,
  `createtime` text NOT NULL,
  `updatetime` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- 傾印資料表的資料 `post`
--

INSERT INTO `post` (`id`, `coverurl`, `title`, `content`, `tag`, `createtime`, `updatetime`) VALUES
(1, 'project005/Picture3.jpg', 'test1', '<p>this is an description</p><p>for this test1</p><ol><li>gsdsdfgfds</li><li>fdgsdfgdgf</li></ol>', '', '2023-12-09 20:52:02', '2023-12-09 20:52:02'),
(2, 'project005/5quIL7GKL0c5ZtDDELRDVgwAYaWynB.jpg', 'test2', '<p>this is test2</p><p>grsfdfgdfg</p>', '', '2023-12-09 23:40:16', '2023-12-09 23:40:16'),
(3, 'project005/n3qGI0YKj17PPIPDAJwGAqOENLlYqJ.png', 'test3', '<p>this is an test3<br>我是<strong>中文測試</strong><br>，/\\&lt;fdjidk<i>jlisdlkjsd&gt;</i></p>', '', '2023-12-10 10:29:35', '2023-12-10 10:29:35'),
(4, 'project005/DnPJQ68BLzJbipBuVvZfNlsuXCnnNP.png', '', '<p>dsafsadfsdasafd</p><p><img src=\"/backend/media/project005/bbPZlhq0TaIXw4D6w3irvHHtoN8rbO.png\" width=\"500\" height=\"500\"></p><p>dscdscsd</p>', '', '2023-12-10 14:36:36', '2023-12-10 14:36:36'),
(5, 'project005/cgAJRUBU1ZDor4JrsQOLqto46p6rcF.jpg', '342', '<p>123</p><figure class=\"image\"><img style=\"aspect-ratio:1479/1109;\" src=\"/backend/media/project005/40cunieftEfZep8Fkv5qibKv9Lb91Y.jpg\" width=\"1479\" height=\"1109\"></figure><p>123</p>', '', '2023-12-10 14:43:28', '2023-12-10 14:43:28'),
(6, 'project005/QURsgkiEAsY8cHckFjOphwegtsmQbM.png', 'test', '<p>123456789</p>', 'test', '2023-12-17 11:28:42', '2023-12-17 11:28:42'),
(7, 'project005/F3Y5OFA6llc7gEFhqBSu9XoAOSGQLI.jpg', 'ffsdfsda', '<p>fsdsddsa</p>', 'test|&|test2|&|test3456', '2023-12-17 11:29:17', '2023-12-17 11:29:17'),
(8, 'project005/7SWbaXBueJJv1CdQVUYtcGM67wo599.jpg', 'asfsa', '<p>ffasfsd</p>', 'test', '2023-12-17 11:54:38', '2023-12-17 11:54:38');

-- --------------------------------------------------------

--
-- 資料表結構 `posttag`
--

CREATE TABLE `posttag` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- 傾印資料表的資料 `posttag`
--

INSERT INTO `posttag` (`id`, `name`) VALUES
(1, 'test'),
(2, 'test2'),
(3, 'test3456'),
(4, 'test4');

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `coverurl` text NOT NULL,
  `title` text NOT NULL,
  `content` longtext NOT NULL,
  `tag` text NOT NULL,
  `createtime` text NOT NULL,
  `updatetime` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`id`, `coverurl`, `title`, `content`, `tag`, `createtime`, `updatetime`) VALUES
(1, 'project005/QR4PYcufhSZaUg9JIOjOMlTFTQ7jua.png', 'test1', '<p>dfadsfdsfafds</p>', 'system', '2023-12-10 17:22:16', '2023-12-10 17:22:16'),
(2, 'project005/ZFR4zsnHkEsmEu78qtcrSFcHkP6iEm.jpeg', 'Test', '<p>789</p>', 'commercializeapp', '2023-12-10 18:16:33', '2023-12-10 18:16:33');

-- --------------------------------------------------------

--
-- 資料表結構 `token`
--

CREATE TABLE `token` (
  `id` int(11) NOT NULL,
  `userid` text NOT NULL,
  `token` text NOT NULL,
  `createtime` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- 傾印資料表的資料 `token`
--

INSERT INTO `token` (`id`, `userid`, `token`, `createtime`) VALUES
(30, '1', '5a81e5d56ae016b99cb8e65b7ab243b28326af08c8c7ddbc0b62e994250e382f13098692', '2023-12-10 15:38:04'),
(37, '1', '5a81e5d56ae016b99cb8e65b7ab243b28326af08c8c7ddbc0b62e994250e382f04469660', '2023-12-10 19:37:07'),
(38, '1', '5a81e5d56ae016b99cb8e65b7ab243b28326af08c8c7ddbc0b62e994250e382f74820374', '2023-12-12 12:12:25');

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `permission` text NOT NULL,
  `createtime` text NOT NULL,
  `updatetime` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- 傾印資料表的資料 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `permission`, `createtime`, `updatetime`) VALUES
(1, 'chris0527', '$2b$12$dUlPPXdWVTs6lup9fh2L8.rl0TWfeRHXcxRCioFiEdfvcD7GBD8/u', '1', '2023-12-10 15:38:04', '2023-12-10 15:38:04'),
(2, '123', '$2b$12$JgGANu6vJx2bkXtiIoCc5uLEOjx.5uq8OO/NeOeGCO4SVMK7GKY1i', '1', '2023-12-10 15:54:01', '2023-12-10 15:54:01');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `posttag`
--
ALTER TABLE `posttag`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `log`
--
ALTER TABLE `log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=777;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `posttag`
--
ALTER TABLE `posttag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `token`
--
ALTER TABLE `token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
