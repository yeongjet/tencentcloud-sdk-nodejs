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
 * es client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("es.tencentcloudapi.com", "2018-04-16", clientConfig);
    }
    /**
     * 查询实例指定条件下的操作记录
     */
    async DescribeInstanceOperations(req, cb) {
        return this.request("DescribeInstanceOperations", req, cb);
    }
    /**
     * 查询用户该地域下符合条件的所有实例
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 变更插件列表
     */
    async UpdatePlugins(req, cb) {
        return this.request("UpdatePlugins", req, cb);
    }
    /**
     * 创建指定规格的ES集群实例
     */
    async CreateInstance(req, cb) {
        return this.request("CreateInstance", req, cb);
    }
    /**
     * 升级ES集群版本
     */
    async UpgradeInstance(req, cb) {
        return this.request("UpgradeInstance", req, cb);
    }
    /**
     * 升级ES商业特性
     */
    async UpgradeLicense(req, cb) {
        return this.request("UpgradeLicense", req, cb);
    }
    /**
     * 对集群进行节点规格变更，修改实例名称，修改配置，重置密码， 添加Kibana黑白名单等操作。参数中InstanceId为必传参数，ForceRestart为选填参数，剩余参数传递组合及含义如下：
- InstanceName：修改实例名称(仅用于标识实例)
- NodeInfoList: 修改节点配置（节点横向扩缩容，纵向扩缩容，增加主节点，增加冷节点等）
- EsConfig：修改集群配置
- Password：修改默认用户elastic的密码
- EsAcl：修改访问控制列表
- CosBackUp: 设置集群COS自动备份信息
以上参数组合只能传递一种，多传或少传均会导致请求失败
     */
    async UpdateInstance(req, cb) {
        return this.request("UpdateInstance", req, cb);
    }
    /**
     * 销毁集群实例
     */
    async DeleteInstance(req, cb) {
        return this.request("DeleteInstance", req, cb);
    }
    /**
     * 重启ES集群实例(用于系统版本更新等操作)
     */
    async RestartInstance(req, cb) {
        return this.request("RestartInstance", req, cb);
    }
    /**
     * 查询用户该地域下符合条件的ES集群的日志
     */
    async DescribeInstanceLogs(req, cb) {
        return this.request("DescribeInstanceLogs", req, cb);
    }
}
exports.Client = Client;
