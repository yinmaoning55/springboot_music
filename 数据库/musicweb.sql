/*
Navicat MySQL Data Transfer

Source Server         : leishao
Source Server Version : 50534
Source Host           : localhost:3306
Source Database       : musicweb

Target Server Type    : MYSQL
Target Server Version : 50534
File Encoding         : 65001

Date: 2018-06-27 08:25:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for member
-- ----------------------------
DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `pwd` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of member
-- ----------------------------
INSERT INTO `member` VALUES ('2', '隔壁老王', '王超', 'wep128', '27839@163.com', '182362874', '2019');
INSERT INTO `member` VALUES ('6', '无敌', '无名', '234rt', '1019990938@qq.com', '13673688368', '2018年6月25日');
INSERT INTO `member` VALUES ('7', 'aa', 'Angelababy', '123', '3456737@qq.com', '13876589834', '2018年6月26日');

-- ----------------------------
-- Table structure for music
-- ----------------------------
DROP TABLE IF EXISTS `music`;
CREATE TABLE `music` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `singer` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `Irc` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of music
-- ----------------------------
INSERT INTO `music` VALUES ('1', '5', '天国', '腾格尔', null, null, null, '2019');
INSERT INTO `music` VALUES ('2', '1', '水电费', '无上的敌', null, null, null, '2119');
INSERT INTO `music` VALUES ('5', '1', '饿狼传说', '阿凯', null, null, null, '2019');
INSERT INTO `music` VALUES ('6', '1', '离别', '阿杜', null, null, null, '2019');
INSERT INTO `music` VALUES ('7', '5', '烟雨蒙蒙', '阿菲', null, null, null, '2018年6月25日');
INSERT INTO `music` VALUES ('8', '3', 'aa', 'bb', null, null, null, '2018年6月26日');
INSERT INTO `music` VALUES ('9', '1', '地方', '旭日阳刚', null, null, null, '2018年6月26日');
INSERT INTO `music` VALUES ('10', '5', '夕阳桥头', '王方', null, null, null, '2018年6月26日');
INSERT INTO `music` VALUES ('11', '3', '天机', '梦雅', null, null, null, '2018年6月26日');
INSERT INTO `music` VALUES ('12', '3', '成吉思汗', '扎博雷', null, null, null, '2018年6月26日');

-- ----------------------------
-- Table structure for musiclist
-- ----------------------------
DROP TABLE IF EXISTS `musiclist`;
CREATE TABLE `musiclist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `descri` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of musiclist
-- ----------------------------
INSERT INTO `musiclist` VALUES ('1', '喜欢', '我喜欢的', null, '2019');
INSERT INTO `musiclist` VALUES ('3', '最爱', '我最爱的', null, '2019');
INSERT INTO `musiclist` VALUES ('5', '试听', '感觉还可以', null, '2018年6月25日');

-- ----------------------------
-- Table structure for notice
-- ----------------------------
DROP TABLE IF EXISTS `notice`;
CREATE TABLE `notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of notice
-- ----------------------------
INSERT INTO `notice` VALUES ('1', 'Angelababy怀孕了', '2018');
INSERT INTO `notice` VALUES ('2', '是黄晓明的', '2018年6月25日');
SET FOREIGN_KEY_CHECKS=1;
