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
 * mongodb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("mongodb.tencentcloudapi.com", "2018-04-08", clientConfig);
    }
    /**
       * 本接口(AssignProject)用于指定云数据库实例的所属项目。
  
  
       */
    async AssignProject(req, cb) {
        return this.request("AssignProject", req, cb);
    }
    /**
     * 本接口(TerminateDBInstance)用于销毁按量计费的MongoDB云数据库实例
     */
    async TerminateDBInstance(req, cb) {
        return this.request("TerminateDBInstance", req, cb);
    }
    /**
     * 本接口(CreateDBInstance)用于创建包年包月的MongoDB云数据库实例。
     */
    async CreateDBInstance(req, cb) {
        return this.request("CreateDBInstance", req, cb);
    }
    /**
     * 本接口(DescribeClientConnections)用于查询实例客户端连接信息，包括连接IP和连接数量。目前只支持3.2版本的MongoDB实例。
     */
    async DescribeClientConnections(req, cb) {
        return this.request("DescribeClientConnections", req, cb);
    }
    /**
     * 本接口(CreateDBInstanceHour)用于创建按量计费的MongoDB云数据库实例（包括主实例、灾备实例和只读实例），可通过传入实例规格、实例类型、MongoDB版本、购买时长和数量等信息创建云数据库实例。
     */
    async CreateDBInstanceHour(req, cb) {
        return this.request("CreateDBInstanceHour", req, cb);
    }
    /**
     * 本接口(DescribeSlowLogs)用于获取云数据库实例的慢查询日志。
     */
    async DescribeSlowLog(req, cb) {
        return this.request("DescribeSlowLog", req, cb);
    }
    /**
     * 本接口(RenameInstance)用于修改云数据库实例的名称。
     */
    async RenameInstance(req, cb) {
        return this.request("RenameInstance", req, cb);
    }
    /**
     * 本接口(UpgradeDBInstance)用于升级包年包月的MongoDB云数据库实例，可以扩容内存、存储以及Oplog
     */
    async UpgradeDBInstance(req, cb) {
        return this.request("UpgradeDBInstance", req, cb);
    }
    /**
     * 本接口(SetAutoRenew)用于设置包年包月云数据库实例的续费选项。
     */
    async SetAutoRenew(req, cb) {
        return this.request("SetAutoRenew", req, cb);
    }
    /**
     * 本接口(DescribeSpecInfo)用于查询实例的售卖规格。
     */
    async DescribeSpecInfo(req, cb) {
        return this.request("DescribeSpecInfo", req, cb);
    }
    /**
       * 本接口(SetPassword)用于设置云数据库账户的密码。
  
  
       */
    async SetPassword(req, cb) {
        return this.request("SetPassword", req, cb);
    }
    /**
     * 本接口(UpgradeDBInstanceHour)用于升级按量计费的MongoDB云数据库实例，可以扩容内存、存储以及oplog
     */
    async UpgradeDBInstanceHour(req, cb) {
        return this.request("UpgradeDBInstanceHour", req, cb);
    }
    /**
     * 本接口(DescribeDBInstances)用于查询云数据库实例列表，支持通过项目ID、实例ID、实例状态等过滤条件来筛选实例。支持查询主实例、灾备实例和只读实例信息列表。
     */
    async DescribeDBInstances(req, cb) {
        return this.request("DescribeDBInstances", req, cb);
    }
}
exports.Client = Client;
