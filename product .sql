-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2020-07-27 16:01:33
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
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `num` int(10) NOT NULL,
  `pic` varchar(255) NOT NULL,
  `details` varchar(2555) NOT NULL,
  `detailsimg` varchar(10000) NOT NULL,
  `size` varchar(255) NOT NULL,
  `classname` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `num`, `pic`, `details`, `detailsimg`, `size`, `classname`) VALUES
(1, '韩国超轻家居拖鞋批发男女室内浴室洗澡凉拖鞋女夏季情侣拖鞋 717浅紫 36-37', '29.0', 66, '{\"title\":\"sma\",\"src\":\"images/p0-0.jpg\"}', '<h1>商品详情<h1>', 'http://img11.360buyimg.com/n1//s600x600_jfs/t1/117014/32/3463/84402/5ea7d2feE772140c6/e7d1c0bc6272092f.jpg,http://img11.360buyimg.com/n1//s600x600_jfs/t1/118993/14/3366/189693/5ea7d2fcE3a65fc79/3ceb1344cf34d655.jpg,http://img11.360buyimg.com/n1//s600x600_jfs/t1/111742/35/3426/279458/5ea7d2fdE661df39b/c099331370637a66.jpg,http://img11.360buyimg.com/n1//s600x600_jfs/t1/117070/22/3434/267668/5ea7d2fdEcd36e216/7558c8fdfbbda251.jpg,http://img11.360buyimg.com/n1//s600x600_jfs/t1/117666/4/3445/207074/5ea7d2fdEcb79018b/1227c3d6addfd1ab.jpg,http://img11.360buyimg.com/n1//s600x600_jfs/t1/108994/14/14533/169109/5ea7d2fdEc5149345/98c38ccf09ea2df3.jpg,http://img11.360buyimg.com/n1//s600x600_jfs/t1/116435/12/3416/77601/5ea7d2feE6ff7c717/b8aafa31b39da355.jpg,http://img11.360buyimg.com/n1//s600x600_jfs/t1/117813/18/3425/77793/5ea7d2feE527988a6/64550148b2fd2b4e.jpg,http://img11.360buyimg.com/n1//s600x600_jfs/t1/112246/22/3322/104754/5ea7d2ffE2ad5573f/9f69434d43ef5d07.jpg,http://img11.360buyimg.com/n1//s600x600_jfs/t1/109785/32/14495/81440/5ea7d2feEd02fa776/b7224ac8f7bfe902.jpg', '36-37,38-39,40-41,42-43,44-45,40-41男', ''),
(2, '夏季薄款护膝保暖老寒腿关节男女防滑硅胶护具膝盖关节无痕防护 黑色常规款', '39.86', 17, '{\"title\":\"sma\",\"src\":\"images/p1-0.jpg\"}', '', 'http://img12.360buyimg.com/n1//s600x600_jfs/t1/150322/13/1026/62895/5eed7f01Ea83ce9ee/49c8ae3f1b8a02ab.jpg,http://img12.360buyimg.com/n1//s600x600_jfs/t1/144641/21/1110/68385/5eed7f00Eafd3c30e/22c168bd62f0d48d.jpg,http://img12.360buyimg.com/n1//s600x600_jfs/t1/112128/18/10598/58968/5eed7f00E610f89a6/983d43d47b302c3a.jpg,http://img12.360buyimg.com/n1//s600x600_jfs/t1/121572/7/5368/54463/5eed7f00E83846bd6/b5b329e03f63c133.jpg,http://img12.360buyimg.com/n1//s600x600_jfs/t1/136698/30/2581/64739/5eed7f01E326c5df0/64907af96d79c89b.jpghttp:///img12.360buyimg.com/n1//s600x600_jfs/t1/126859/29/5229/39083/5eed7f01Eea24ed46/a6921836df7a0383.jpg', '', ''),
(3, '厨房置物架壁挂式免打孔收纳刀架用具用品调味料家用大全挂架厨具 打孔-40cm无杯', '42.0', 99, '{\"title\":\"sma\",\"src\":\"images/p2-0.jpg\"}', '', 'http://img14.360buyimg.com/n1//s600x600_jfs/t1/108240/38/6039/241594/5e4657c9Ef7726312/a4c93abe14cbc727.jpg,http://img14.360buyimg.com/n1//s600x600_jfs/t1/98628/12/12252/192630/5e4657c9E63c0b0e1/b3b0a0b9dd5e2c73.jpg,http://img14.360buyimg.com/n1//s600x600_jfs/t1/85940/20/12200/183510/5e4657caEd0b3461a/28674599001471f2.jpg', '', ''),
(4, '毕亚兹 HDMI转VGA线转换器 高清视频转接头适配器 小米笔记本电脑盒子电视显示器投影仪线 ZH62-黑', '13.9', 99, '{\"title\":\"sma\",\"src\":\"images/p3-0.jpg\"}', '', 'http://img10.360buyimg.com/n1//s600x600_jfs/t1/132849/32/1621/320993/5edaf80eEc227958e/78e67e5280d66a88.jpg,http://img10.360buyimg.com/n1//s600x600_jfs/t1/34122/33/11060/343180/5ceb6521E9f3266aa/48c59b33e0194826.jpg,http://img10.360buyimg.com/n1//s600x600_jfs/t1/57024/15/980/474060/5ceb6521E0d16e49d/cbbbf5bf2ca06b7c.jpg,http://img10.360buyimg.com/n1//s600x600_jfs/t1/38661/20/7509/166139/5ceb6521Ec6f76f3f/495b3281dbc0d6e9.jpg,http://img10.360buyimg.com/n1//s600x600_jfs/t1/37386/40/10149/254309/5ceb6522E97d1f8ac/e5a0adc54e751668.jpg,http://img10.360buyimg.com/n1//s600x600_jfs/t1/72829/31/490/227099/5ceb6523E6a6fae9d/670cf951276aa954.jp,http:///img10.360buyimg.com/n1//s600x600_jfs/t12238/83/2218796900/293159/8859c90c/5a376c4aNba87488c.jpg,http://img10.360buyimg.com/n1//s600x600_jfs/t1/47772/23/1022/235591/5ceb6522E77f4786f/5959700153da1ef6.jpg', '', ''),
(5, '爹地宝贝daddybaby酷动BB裤拉拉裤XL18片（12-17KG）超薄瞬吸干爽亲肤婴儿成长裤小内裤', '30.0', 99, '{\"title\":\"sma\",\"src\":\"images/p4-0.jpg\"}', '', 'http://img11.360buyimg.com/n1/s600x600_jfs/t1/104254/21/4523/217844/5de8653dEcdc1c6b5/d82150c1a944d600.jpg,http://img11.360buyimg.com/n1//s600x600_jfs/t18643/72/1107591368/304434/a5b35f3b/5abdc83fNc4ebb391.jpg,http://img11.360buyimg.com/n1//s600x600_jfs/t24124/107/1042742999/100026/935309b2/5b4d64daNf0a120ef.jpg,http://img11.360buyimg.com/n1//s600x600_jfs/t1/2998/33/9662/195607/5bad9ff6E0ad431e3/a073ed8f69ab937c.jpg,http://img11.360buyimg.com/n1//s600x600_jfs/t1/1925/4/9815/189419/5bad9ff7E2198d969/0518acc75f8b77c2.jpg,http://img11.360buyimg.com/n1//s600x600_jfs/t1/4430/3/9756/284203/5bad9ff7Ebcaafeba/d14b86da3adbd507.jpg,http://img11.360buyimg.com/n1//s600x600_jfs/t17269/304/1201638836/270135/e3136f9d/5abdc851Nfcd4b802.jp,http:///img11.360buyimg.com/n1//s600x600_jfs/t17377/148/1167631545/181725/bc8113a8/5abdc852N32300b17.jpg', '', ''),
(6, 'TP-LINK TL-WN726N免驱版 USB无线网卡 笔记本台式机通用随身wifi接收器  外置天线 智能安装', '56.9', 99, '{\"title\":\"sma\",\"src\":\"images/p5-0.jpg\"}', '', 'http://img10.360buyimg.com/n1/s600x600_jfs/t2146/90/2096274276/2879845/42b3fb3a/56f0a805N7bad2871.jpg,http://img10.360buyimg.com/n1//s600x600_jfs/t2464/27/2845338847/2805388/1651282c/56f0a7edNedef0fbb.jpg,http://img10.360buyimg.com/n1//s600x600_jfs/t2110/220/2094449087/2827613/e359a5b4/56f0a83eNbfd2128a.jpg,http://img10.360buyimg.com/n1//s600x600_jfs/t2002/65/2105816857/2804458/fe1f6b8e/56f0a85dNbbd0b741.jpg,http://img10.360buyimg.com/n1//s600x600_jfs/t2197/133/2785070291/73814/47dc2254/57182c08N0cd00e24.jpg', '', ''),
(7, '罗技（Logitech）K120 键盘 有线键盘 办公键盘 全尺寸 黑色 自营 U口', '49.0', 99, '{\"title\":\"sma\",\"src\":\"images/p6-0.jpg\"}', '', 'http://img14.360buyimg.com/n1//s600x600_jfs/t1/106229/22/9051/174570/5e0d4a59E099ec5cd/2501bf3e7f96c1fb.jpg,http://img14.360buyimg.com/n1//s600x600_g8/M03/0F/14/rBEHaFC1vEcIAAAAAAE3tH0JS-MAADDggNq9fkAATfM072.jpg,http://img14.360buyimg.com/n1//s600x600_g6/M02/03/1B/rBEGDFC1vFIIAAAAAAFiRNRtYw4AAAwIgP1VmMAAWJc455.jpg,http://img14.360buyimg.com/n1//s600x600_g8/M03/0F/14/rBEHZ1C1vF8IAAAAAAEX2TiiCFoAADDggN6VnQAARfx722.jpg', '', ''),
(8, '多功能笔记本电脑包手提单肩 笔记本电脑包气囊版 拓展版蓝色 17寸', '179.0', 99, '{\"title\":\"sma\",\"src\":\"images/p7-0.jpg\"}', '', 'images/p7-1.jpg,images/p7-2.jpg,images/p7-3.jpg,images/p7-4.jpg,images/p7-5.jpg,images/p7-6.jpg', '', ''),
(9, '绿联（UGREEN）六类CAT6类网线 千兆网络连接线 工程家用电脑宽带监控非屏蔽8芯双绞成品跳线 2米 黑 20160', '12.0', 99, '{\"title\":\"sma\",\"src\":\"images/p8-0.jpg\"}', '', 'images/p8-1.jpg,images/p8-2.jpg,images/p8-3.jpg,images/p8-4.jpg,images/p8-5.jpg,images/p8-6.jpg', '', ''),
(10, '小米 无线键鼠套装 简洁轻薄 全尺寸104键键盘 舒适鼠标 2.4G无线传输 电脑办公套装', '99.0', 99, '{\"title\":\"sma\",\"src\":\"images/p9-0.jpg\"}', '', 'images/p9-1.jpg,images/p9-2.jpg,images/p9-3.jpg,images/p9-4.jpg,images/p9-5.jpg,images/p9-6.jpg', '', ''),
(11, 'eyekan口红盒女网红简约小巧迷你便携可爱心形护理盒 樱花粉', '55.0', 99, '{\"title\":\"sma\",\"src\":\"images/p10-0.jpg\"}', '', 'images/p10-1.jpg,images/p10-2.jpg,images/p10-3.jpg,images/p10-4.jpg,images/p10-5.jpg,images/p10-6.jpg', '', ''),
(12, '得力(deli)高强度订书钉 12#订书针 1000枚/盒 10盒装 办公用品 0012', '12.0', 99, '{\"title\":\"sma\",\"src\":\"/images/p11-0.jpg\"}', '', 'images/p11-1.jpg,images/p11-2.jpg,images/p11-3.jpg,images/p11-4.jpg,images/p11-5.jpg,images/p11-6.jpg', '', ''),
(13, '【第二件减6元】优仙果 四川凯特芒果4斤（单果400g以上）大青芒果 新鲜水果', '19.6', 66, '{\"title\":\"sma\",\"src\":\"images/mg1-0.jpg\"}', '<h1>商品详情<h1>', 'http://img10.360buyimg.com/n1//s600x600_jfs/t24577/184/580480091/164299/8d8474c5/5b374319N48b2d816.jpg,http://img10.360buyimg.com/n1//s600x600_jfs/t1/98787/32/13074/103392/5e532d13Ebd7c8802/a6e640c9af28b671.jpg,http://img10.360buyimg.com/n1//s600x600_jfs/t20275/337/1768554709/224869/c6b4ce2c/5b374319Nbfc6f087.jpg,http://img10.360buyimg.com/n1//s600x600_jfs/t23959/239/586325477/171921/7ed6c1d7/5b374319N2fb802c3.jpg,http://img10.360buyimg.com/n1//s600x600_jfs/t23893/233/583184083/199419/65750679/5b37430fN99492a70.jpg', '', '鲜'),
(14, '大台农芒果 1.5kg装 单果150g以上 新鲜水果', '36.9', 17, '{\"title\":\"sma\",\"src\":\"images/mg2-0.jpg\"}', '', 'http://img14.360buyimg.com/n1//s600x600_jfs/t1/91657/11/13167/615390/5e538f1dE589ad34e/41b95177bf19377c.jpg,http://img14.360buyimg.com/n1//s600x600_jfs/t1/26385/26/9418/255996/5c7ce9bfE3d95c816/de1d1549fe3bbc78.jpg,http://img14.360buyimg.com/n1//s600x600_jfs/t1/14888/27/9242/475981/5c7ce9c0Ebc2ecc8f/8250ee7eb833d0aa.jpg,http://img14.360buyimg.com/n1//s600x600_jfs/t1/17668/11/9145/453693/5c7ce9c2E45aed850/0106ebeb5b544adb.jpg,http://img14.360buyimg.com/n1//s600x600_jfs/t1/23654/37/9311/496454/5c7ce9c3E360413a3/b14f8f0213f4f75a.jpg', '', '鲜'),
(15, '鲜次方 【第2件11.8元，2件共发带箱10斤】攀枝花凯特芒果400g起大果大脸芒新鲜水果东东.农场 净重5斤', '17.8', 99, '{\"title\":\"sma\",\"src\":\"images/mg3-0.jpg\"}', '', 'http://img14.360buyimg.com/n1//s600x600_jfs/t1/143523/34/1061/104961/5eec9a08E8f803d56/f27af5f2da6737f2.jpg,http://img14.360buyimg.com/n1//s600x600_jfs/t1/146448/10/1026/118915/5eec9a09E7f876613/e4c6aa4b695ed47e.jpg,http://img14.360buyimg.com/n1//s600x600_jfs/t1/141109/19/1034/96796/5eec9a08Ea1fb791f/53a0025d9007f290.jpg,http://img14.360buyimg.com/n1//s600x600_jfs/t1/146480/28/1051/150045/5eec9a09Efca07627/0f1597c6e3b62156.jpg,http://img14.360buyimg.com/n1//s600x600_jfs/t1/143523/34/1061/104961/5eec9a08E8f803d56/f27af5f2da6737f2.jpg', '', '鲜'),
(16, '【闪电发货 死亡全赔】味库 加拿大进口鲜活波士顿大龙虾1只 500-400g/只', '97', 66, '{\"title\":\"sma\",\"src\":\"images/lx1-0.jpg\"}', '', 'http://img12.360buyimg.com/n1/s600x600_jfs/t1/124944/38/6959/224856/5f0bf36eE31847207/9f829ae2249f976d.jpg,http://img12.360buyimg.com/n1//s600x600_jfs/t1/94675/22/13778/158921/5e5e35ffE04bef6ee/51a2347c3b4a70b8.jpg,http://img12.360buyimg.com/n1//s600x600_jfs/t1/130277/16/816/146103/5ed215c5E4d77f2b2/c4bf03cf0c8f49d2.jpg,http://img12.360buyimg.com/n1//s600x600_jfs/t1/92209/40/13736/139077/5e5e35ffEfaaadcac/d47f2e846fcd4f95.jpg,http://img12.360buyimg.com/n1//s600x600_jfs/t1/122954/12/3464/198767/5ed215c5E91de45ce/eea4badab8def37c.jpg', '', '鲜'),
(17, '【鲜活】味库 加拿大波士顿龙虾400-500g 1只 进口海鲜水产', '119', 99, '{\"title\":\"sma\",\"src\":\"images/lx2-0.jpg\"}', '', 'http://img13.360buyimg.com/n1/s600x600_jfs/t20797/37/676617092/177576/5c947686/5b14a771N459ffde1.jpg,http://img13.360buyimg.com/n1//s600x600_jfs/t1/97200/16/2212/227499/5dccd2d4E6221fff2/e7b9e4539f2e6d63.jpg,http://img13.360buyimg.com/n1//s600x600_jfs/t5914/260/4379437504/283483/d4d5116e/596094ddN55f80314.jpg,http://img13.360buyimg.com/n1//s600x600_jfs/t5074/71/705741357/273687/aec78cf2/58e74808Nae0b6ec6.jpg,http://img13.360buyimg.com/n1//s600x600_jfs/t5728/135/5450433685/423959/a7cdca00/596094f0N685c1ebe.jpg', '', '鲜'),
(18, '【拍3份仅99元】优牧冠 麻辣小龙虾 加热即食 湖北农产品 中号4-6钱 麻辣750g（净重500g）17-25只', '58', 53, '{\"title\":\"sma\",\"src\":\"images/lx3-0.jpg\"}', '', 'http://img14.360buyimg.com/n1//s600x600_jfs/t1/117684/33/10945/698746/5ef59e9aE1f7dc5fb/d444a8fd2caf400c.jpg,http://img14.360buyimg.com/n1//s600x600_jfs/t1/130569/17/2721/376080/5eef2c80E9c6c0532/4472310692b5c55a.jpg,http://img14.360buyimg.com/n1//s600x600_jfs/t1/137511/40/2728/377879/5eef2c80Ee3f12a1b/e672fcb6ffc09af8.jpg,http://img14.360buyimg.com/n1//s600x600_jfs/t1/141494/5/1161/643758/5eef2c7fEf1adf576/53fe7ae9e862711f.jpg,http://img14.360buyimg.com/n1//s600x600_jfs/t1/134208/35/2736/330129/5eef2c83E75a99908/67f45de092dbe92b.jpg,http://img14.360buyimg.com/n1//s600x600_jfs/t1/126116/1/5369/133780/5eef2c80E1c91d0de/619c8f018b82eb7f.jpg,http://img14.360buyimg.com/n1//s600x600_jfs/t1/125046/17/5393/155403/5eef2c80E14c6c612/0523a85a478586fa.jpg', '', '鲜');

--
-- 转储表的索引
--

--
-- 表的索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
