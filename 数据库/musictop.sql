/*
Navicat MySQL Data Transfer

Source Server         : leishao
Source Server Version : 50534
Source Host           : localhost:3306
Source Database       : musictop

Target Server Type    : MYSQL
Target Server Version : 50534
File Encoding         : 65001

Date: 2018-06-27 08:23:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for fashiontop
-- ----------------------------
DROP TABLE IF EXISTS `fashiontop`;
CREATE TABLE `fashiontop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `songName` varchar(255) DEFAULT NULL,
  `singerName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of fashiontop
-- ----------------------------
INSERT INTO `fashiontop` VALUES ('1', '大风沙', '王悦');

-- ----------------------------
-- Table structure for hottop
-- ----------------------------
DROP TABLE IF EXISTS `hottop`;
CREATE TABLE `hottop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `songName` varchar(255) DEFAULT NULL,
  `singerName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hottop
-- ----------------------------
INSERT INTO `hottop` VALUES ('1', '无敌', '寂寞');

-- ----------------------------
-- Table structure for nettop
-- ----------------------------
DROP TABLE IF EXISTS `nettop`;
CREATE TABLE `nettop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `songName` varchar(255) DEFAULT NULL,
  `singerName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of nettop
-- ----------------------------
INSERT INTO `nettop` VALUES ('1', '无敌', '寂寞');

-- ----------------------------
-- Table structure for newtop
-- ----------------------------
DROP TABLE IF EXISTS `newtop`;
CREATE TABLE `newtop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `songName` varchar(255) DEFAULT NULL,
  `singerName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of newtop
-- ----------------------------
INSERT INTO `newtop` VALUES ('1', '无敌', '寂寞');

-- ----------------------------
-- Table structure for oldtop
-- ----------------------------
DROP TABLE IF EXISTS `oldtop`;
CREATE TABLE `oldtop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `songName` varchar(255) DEFAULT NULL,
  `singerName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of oldtop
-- ----------------------------
INSERT INTO `oldtop` VALUES ('1', '无敌', '寂寞');

-- ----------------------------
-- Table structure for origintop
-- ----------------------------
DROP TABLE IF EXISTS `origintop`;
CREATE TABLE `origintop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `songName` varchar(255) DEFAULT NULL,
  `singerName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of origintop
-- ----------------------------
INSERT INTO `origintop` VALUES ('1', '无敌', '寂寞');
SET FOREIGN_KEY_CHECKS=1;
