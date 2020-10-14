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
import { DescribeSdkAppidResponse, DescribeSdkAppidRequest } from "./cim_models"

/**
 * cim client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cim.tencentcloudapi.com", "2019-03-18", clientConfig)
  }

  /**
   * 获取云通信IM中腾讯云账号对应的SDKAppID
   */
  async DescribeSdkAppid(
    req?: DescribeSdkAppidRequest,
    cb?: (error: string, rep: DescribeSdkAppidResponse) => void
  ): Promise<DescribeSdkAppidResponse> {
    return this.request("DescribeSdkAppid", req, cb)
  }
}
