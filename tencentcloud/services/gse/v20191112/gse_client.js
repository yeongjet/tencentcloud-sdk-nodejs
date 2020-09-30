"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * gse client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("gse.tencentcloudapi.com", "2019-11-12", clientConfig);
    }
    /**
     * 本接口（UpdateGameServerSession）用于更新游戏服务器会话
     */
    async UpdateGameServerSession(req, cb) {
        return this.request("UpdateGameServerSession", req, cb);
    }
    /**
     * 用于查询服务部署的动态扩缩容配置
     */
    async DescribeScalingPolicies(req, cb) {
        return this.request("DescribeScalingPolicies", req, cb);
    }
    /**
     * 用于查询服务器实例列表
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 本接口（DescribeGameServerSessions）用于查询游戏服务器会话列表
     */
    async DescribeGameServerSessions(req, cb) {
        return this.request("DescribeGameServerSessions", req, cb);
    }
    /**
     * 获取实例登录所需要的凭据
     */
    async GetInstanceAccess(req, cb) {
        return this.request("GetInstanceAccess", req, cb);
    }
    /**
     * 本接口（JoinGameServerSession）用于加入游戏服务器会话
     */
    async JoinGameServerSession(req, cb) {
        return this.request("JoinGameServerSession", req, cb);
    }
    /**
     * 本接口（DescribeGameServerSessionPlacement）用于查询游戏服务器会话的放置
     */
    async DescribeGameServerSessionPlacement(req, cb) {
        return this.request("DescribeGameServerSessionPlacement", req, cb);
    }
    /**
     * 本接口（DescribeGameServerSessionDetails）用于查询游戏服务器会话详情列表
     */
    async DescribeGameServerSessionDetails(req, cb) {
        return this.request("DescribeGameServerSessionDetails", req, cb);
    }
    /**
     * 用于设置动态扩缩容配置
     */
    async PutScalingPolicy(req, cb) {
        return this.request("PutScalingPolicy", req, cb);
    }
    /**
     * 本接口（StartGameServerSessionPlacement）用于开始放置游戏服务器会话
     */
    async StartGameServerSessionPlacement(req, cb) {
        return this.request("StartGameServerSessionPlacement", req, cb);
    }
    /**
     * 设置服务器权重
     */
    async SetServerWeight(req, cb) {
        return this.request("SetServerWeight", req, cb);
    }
    /**
     * 本接口（StartMatchPlacement）用于开始匹配放置游戏服务器会话
     */
    async StartMatchPlacement(req, cb) {
        return this.request("StartMatchPlacement", req, cb);
    }
    /**
     * 本接口（StopGameServerSessionPlacement）用于停止放置游戏服务器会话
     */
    async StopGameServerSessionPlacement(req, cb) {
        return this.request("StopGameServerSessionPlacement", req, cb);
    }
    /**
     * 本接口（DescribePlayerSessions）用于获取玩家会话列表
     */
    async DescribePlayerSessions(req, cb) {
        return this.request("DescribePlayerSessions", req, cb);
    }
    /**
     * 本接口（GetGameServerSessionLogUrl）用于获取游戏服务器会话的日志URL
     */
    async GetGameServerSessionLogUrl(req, cb) {
        return this.request("GetGameServerSessionLogUrl", req, cb);
    }
    /**
     * 本接口（SearchGameServerSessions）用于搜索游戏服务器会话列表
     */
    async SearchGameServerSessions(req, cb) {
        return this.request("SearchGameServerSessions", req, cb);
    }
    /**
     * 用于删除扩缩容配置
     */
    async DeleteScalingPolicy(req, cb) {
        return this.request("DeleteScalingPolicy", req, cb);
    }
    /**
     * 本接口（CreateGameServerSession）用于创建游戏服务会话
     */
    async CreateGameServerSession(req, cb) {
        return this.request("CreateGameServerSession", req, cb);
    }
    /**
     * 本接口（DescribeGameServerSessionQueues）用于查询游戏服务器会话队列
     */
    async DescribeGameServerSessionQueues(req, cb) {
        return this.request("DescribeGameServerSessionQueues", req, cb);
    }
}
exports.Client = Client;
