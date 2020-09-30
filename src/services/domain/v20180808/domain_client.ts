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
import { AbstractClient, ClientConfig } from "../../../common/abstract_client"
import {
  CheckDomainResponse,
  DescribeDomainPriceListResponse,
  CheckDomainRequest,
  PriceInfo,
  DescribeDomainPriceListRequest,
} from "./domain_models"

/**
 * domain client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("domain.tencentcloudapi.com", "2018-08-08", clientConfig)
  }

  /**
   * 按照域名后缀获取对应的价格列表
   */
  async DescribeDomainPriceList(
    req: DescribeDomainPriceListRequest,
    cb?: (error: string, rep: DescribeDomainPriceListResponse) => void
  ): Promise<DescribeDomainPriceListResponse> {
    return this.request("DescribeDomainPriceList", req, cb)
  }

  /**
   * 检查域名是否可以注册。
   */
  async CheckDomain(
    req: CheckDomainRequest,
    cb?: (error: string, rep: CheckDomainResponse) => void
  ): Promise<CheckDomainResponse> {
    return this.request("CheckDomain", req, cb)
  }
}
