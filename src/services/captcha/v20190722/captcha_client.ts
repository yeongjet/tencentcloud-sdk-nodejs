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
  DescribeCaptchaOperDataResponse,
  CaptchaOperDataInterceptUnit,
  CaptchaOperDataTryTimesDistributeUnit,
  CaptchaOperDataTryTimesUnit,
  CaptchaOperDataRes,
  TicketInterceptUnit,
  DescribeCaptchaUserAllAppIdRequest,
  UpdateCaptchaAppIdInfoResponse,
  CaptchaUserAllAppId,
  DescribeCaptchaDataSumResponse,
  DescribeCaptchaTicketDataRequest,
  UpdateCaptchaAppIdInfoRequest,
  DescribeCaptchaOperDataRequest,
  DescribeCaptchaDataSumRequest,
  TicketAmountUnit,
  CaptchaQueryData,
  TicketThroughUnit,
  DescribeCaptchaDataResponse,
  DescribeCaptchaResultRequest,
  DescribeCaptchaResultResponse,
  CaptchaOperDataLoadTimeUnit,
  DescribeCaptchaAppIdInfoRequest,
  DescribeCaptchaAppIdInfoResponse,
  DescribeCaptchaUserAllAppIdResponse,
  DescribeCaptchaDataRequest,
  CaptchaTicketDataRes,
  DescribeCaptchaTicketDataResponse,
} from "./captcha_models"

/**
 * captcha client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("captcha.tencentcloudapi.com", "2019-07-22", clientConfig)
  }

  /**
   * 安全验证码获取用户注册所有APPId和应用名称
   */
  async DescribeCaptchaUserAllAppId(
    req?: DescribeCaptchaUserAllAppIdRequest,
    cb?: (error: string, rep: DescribeCaptchaUserAllAppIdResponse) => void
  ): Promise<DescribeCaptchaUserAllAppIdResponse> {
    return this.request("DescribeCaptchaUserAllAppId", req, cb)
  }

  /**
   * 验证码控制台票据验证信息
   */
  async DescribeCaptchaTicketData(
    req: DescribeCaptchaTicketDataRequest,
    cb?: (error: string, rep: DescribeCaptchaTicketDataResponse) => void
  ): Promise<DescribeCaptchaTicketDataResponse> {
    return this.request("DescribeCaptchaTicketData", req, cb)
  }

  /**
   * 安全验证码查询请求数据概况，例如：按照时间段查询数据  昨日请求量、昨日恶意比例、昨日验证量、昨日通过量、昨日恶意拦截量……
   */
  async DescribeCaptchaDataSum(
    req: DescribeCaptchaDataSumRequest,
    cb?: (error: string, rep: DescribeCaptchaDataSumResponse) => void
  ): Promise<DescribeCaptchaDataSumResponse> {
    return this.request("DescribeCaptchaDataSum", req, cb)
  }

  /**
   * 安全验证码用户操作数据查询，验证码加载耗时type = 1 、拦截情况type = 2、 一周通过平均尝试次数 type = 3、尝试次数分布 type = 4
   */
  async DescribeCaptchaOperData(
    req: DescribeCaptchaOperDataRequest,
    cb?: (error: string, rep: DescribeCaptchaOperDataResponse) => void
  ): Promise<DescribeCaptchaOperDataResponse> {
    return this.request("DescribeCaptchaOperData", req, cb)
  }

  /**
   * 查询安全验证码应用APPId信息
   */
  async DescribeCaptchaAppIdInfo(
    req: DescribeCaptchaAppIdInfoRequest,
    cb?: (error: string, rep: DescribeCaptchaAppIdInfoResponse) => void
  ): Promise<DescribeCaptchaAppIdInfoResponse> {
    return this.request("DescribeCaptchaAppIdInfo", req, cb)
  }

  /**
   * 安全验证码分类查询数据接口，请求量type=0、通过量type=1、验证量type=2、拦截量type=3  分钟级查询
   */
  async DescribeCaptchaData(
    req: DescribeCaptchaDataRequest,
    cb?: (error: string, rep: DescribeCaptchaDataResponse) => void
  ): Promise<DescribeCaptchaDataResponse> {
    return this.request("DescribeCaptchaData", req, cb)
  }

  /**
   * 更新验证码应用APPId信息
   */
  async UpdateCaptchaAppIdInfo(
    req: UpdateCaptchaAppIdInfoRequest,
    cb?: (error: string, rep: UpdateCaptchaAppIdInfoResponse) => void
  ): Promise<UpdateCaptchaAppIdInfoResponse> {
    return this.request("UpdateCaptchaAppIdInfo", req, cb)
  }

  /**
   * 核查验证码票据结果
   */
  async DescribeCaptchaResult(
    req: DescribeCaptchaResultRequest,
    cb?: (error: string, rep: DescribeCaptchaResultResponse) => void
  ): Promise<DescribeCaptchaResultResponse> {
    return this.request("DescribeCaptchaResult", req, cb)
  }
}
