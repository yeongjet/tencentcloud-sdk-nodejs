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
  DetectInfoVideoData,
  GetDetectInfoEnhancedRequest,
  LivenessRequest,
  CheckBankCardInformationRequest,
  MobileNetworkTimeVerificationResponse,
  GetLiveCodeRequest,
  IdCardVerificationRequest,
  BankCardVerificationRequest,
  CheckBankCardInformationResponse,
  DetectInfoBestFrame,
  CheckIdCardInformationResponse,
  GetDetectInfoEnhancedResponse,
  PhoneVerificationRequest,
  DetectAuthResponse,
  PhoneVerificationResponse,
  IdCardOCRVerificationRequest,
  BankCard4EVerificationResponse,
  MobileStatusRequest,
  LivenessRecognitionResponse,
  BankCard2EVerificationRequest,
  LivenessRecognitionRequest,
  MobileNetworkTimeVerificationRequest,
  IdCardOCRVerificationResponse,
  MobileStatusResponse,
  LivenessResponse,
  CheckIdCardInformationRequest,
  DetectInfoText,
  DetectAuthRequest,
  MinorsVerificationResponse,
  BankCardVerificationResponse,
  ImageRecognitionRequest,
  BankCard4EVerificationRequest,
  GetActionSequenceResponse,
  MinorsVerificationRequest,
  ImageRecognitionResponse,
  GetActionSequenceRequest,
  GetDetectInfoResponse,
  LivenessCompareResponse,
  GetLiveCodeResponse,
  GetDetectInfoRequest,
  BankCard2EVerificationResponse,
  IdCardVerificationResponse,
  DetectInfoIdCardData,
  LivenessCompareRequest,
  DetectDetail,
} from "./faceid_models"

/**
 * faceid client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("faceid.tencentcloudapi.com", "2018-03-01", clientConfig)
  }

  /**
   * 完成验证后，用BizToken调用本接口获取结果信息，BizToken生成后三天内（3\*24\*3,600秒）可多次拉取。
   */
  async GetDetectInfo(
    req: GetDetectInfoRequest,
    cb?: (error: string, rep: GetDetectInfoResponse) => void
  ): Promise<GetDetectInfoResponse> {
    return this.request("GetDetectInfo", req, cb)
  }

  /**
   * 未成年人守护接口是通过传入手机号或姓名和身份证号，结合权威数据源和腾讯健康守护可信模型，判断该信息是否真实且年满18周岁。腾讯健康守护可信模型覆盖了上十亿手机库源，覆盖率高、准确率高，如果不在库中的手机号，还可以通过姓名+身份证进行兜底验证。
   */
  async MinorsVerification(
    req: MinorsVerificationRequest,
    cb?: (error: string, rep: MinorsVerificationResponse) => void
  ): Promise<MinorsVerificationResponse> {
    return this.request("MinorsVerification", req, cb)
  }

  /**
   * 使用数字活体检测模式前，需调用本接口获取数字验证码。
   */
  async GetLiveCode(
    req: GetLiveCodeRequest,
    cb?: (error: string, rep: GetLiveCodeResponse) => void
  ): Promise<GetLiveCodeResponse> {
    return this.request("GetLiveCode", req, cb)
  }

  /**
   * 传入视频和照片，先判断视频中是否为真人，判断为真人后，再判断该视频中的人与上传照片是否属于同一个人。
   */
  async LivenessCompare(
    req: LivenessCompareRequest,
    cb?: (error: string, rep: LivenessCompareResponse) => void
  ): Promise<LivenessCompareResponse> {
    return this.request("LivenessCompare", req, cb)
  }

  /**
   * 本接口用于校验姓名和银行卡号的真实性和一致性。
   */
  async BankCard2EVerification(
    req: BankCard2EVerificationRequest,
    cb?: (error: string, rep: BankCard2EVerificationResponse) => void
  ): Promise<BankCard2EVerificationResponse> {
    return this.request("BankCard2EVerification", req, cb)
  }

  /**
   * 传入身份证人像面照片，识别身份证照片上的信息，并将姓名、身份证号、身份证人像照片与公安权威库的证件照进行比对，是否属于同一个人，从而验证身份证信息的真实性。
   */
  async CheckIdCardInformation(
    req: CheckIdCardInformationRequest,
    cb?: (error: string, rep: CheckIdCardInformationResponse) => void
  ): Promise<CheckIdCardInformationResponse> {
    return this.request("CheckIdCardInformation", req, cb)
  }

  /**
   * 本接口用于银行卡号、姓名、开户证件号信息的真实性和一致性。
   */
  async BankCardVerification(
    req: BankCardVerificationRequest,
    cb?: (error: string, rep: BankCardVerificationResponse) => void
  ): Promise<BankCardVerificationResponse> {
    return this.request("BankCardVerification", req, cb)
  }

  /**
   * 活体检测
   */
  async Liveness(
    req: LivenessRequest,
    cb?: (error: string, rep: LivenessResponse) => void
  ): Promise<LivenessResponse> {
    return this.request("Liveness", req, cb)
  }

  /**
   * 本接口用于查询手机号在网时长，输入手机号进行查询。
   */
  async MobileNetworkTimeVerification(
    req: MobileNetworkTimeVerificationRequest,
    cb?: (error: string, rep: MobileNetworkTimeVerificationResponse) => void
  ): Promise<MobileNetworkTimeVerificationResponse> {
    return this.request("MobileNetworkTimeVerification", req, cb)
  }

  /**
   * 传入视频和身份信息，先判断视频中是否为真人，判断为真人后，再判断该视频中的人与公安权威库的证件照是否属于同一个人。
   */
  async LivenessRecognition(
    req: LivenessRecognitionRequest,
    cb?: (error: string, rep: LivenessRecognitionResponse) => void
  ): Promise<LivenessRecognitionResponse> {
    return this.request("LivenessRecognition", req, cb)
  }

  /**
   * 本接口用于验证手机号的状态，您可以输入手机号进行查询。
   */
  async MobileStatus(
    req: MobileStatusRequest,
    cb?: (error: string, rep: MobileStatusResponse) => void
  ): Promise<MobileStatusResponse> {
    return this.request("MobileStatus", req, cb)
  }

  /**
   * 传入姓名和身份证号，校验两者的真实性和一致性。
   */
  async IdCardVerification(
    req: IdCardVerificationRequest,
    cb?: (error: string, rep: IdCardVerificationResponse) => void
  ): Promise<IdCardVerificationResponse> {
    return this.request("IdCardVerification", req, cb)
  }

  /**
   * 本接口用于校验姓名和身份证号的真实性和一致性，您可以通过输入姓名和身份证号或传入身份证人像面照片提供所需验证信息。
   */
  async IdCardOCRVerification(
    req: IdCardOCRVerificationRequest,
    cb?: (error: string, rep: IdCardOCRVerificationResponse) => void
  ): Promise<IdCardOCRVerificationResponse> {
    return this.request("IdCardOCRVerification", req, cb)
  }

  /**
   * 本接口用于输入银行卡号、姓名、开户证件号、开户手机号，校验信息的真实性和一致性。
   */
  async BankCard4EVerification(
    req: BankCard4EVerificationRequest,
    cb?: (error: string, rep: BankCard4EVerificationResponse) => void
  ): Promise<BankCard4EVerificationResponse> {
    return this.request("BankCard4EVerification", req, cb)
  }

  /**
   * 传入照片和身份信息，判断该照片与公安权威库的证件照是否属于同一个人。
   */
  async ImageRecognition(
    req: ImageRecognitionRequest,
    cb?: (error: string, rep: ImageRecognitionResponse) => void
  ): Promise<ImageRecognitionResponse> {
    return this.request("ImageRecognition", req, cb)
  }

  /**
   * 每次调用人脸核身SaaS化服务前，需先调用本接口获取BizToken，用来串联核身流程，在验证完成后，用于获取验证结果信息。
   */
  async DetectAuth(
    req: DetectAuthRequest,
    cb?: (error: string, rep: DetectAuthResponse) => void
  ): Promise<DetectAuthResponse> {
    return this.request("DetectAuth", req, cb)
  }

  /**
   * 使用动作活体检测模式前，需调用本接口获取动作顺序。
   */
  async GetActionSequence(
    req: GetActionSequenceRequest,
    cb?: (error: string, rep: GetActionSequenceResponse) => void
  ): Promise<GetActionSequenceResponse> {
    return this.request("GetActionSequence", req, cb)
  }

  /**
   * 本接口用于校验手机号、姓名和身份证号的真实性和一致性。
   */
  async PhoneVerification(
    req: PhoneVerificationRequest,
    cb?: (error: string, rep: PhoneVerificationResponse) => void
  ): Promise<PhoneVerificationResponse> {
    return this.request("PhoneVerification", req, cb)
  }

  /**
   * 完成验证后，用BizToken调用本接口获取结果信息，BizToken生成后三天内（3\*24\*3,600秒）可多次拉取。
   */
  async GetDetectInfoEnhanced(
    req: GetDetectInfoEnhancedRequest,
    cb?: (error: string, rep: GetDetectInfoEnhancedResponse) => void
  ): Promise<GetDetectInfoEnhancedResponse> {
    return this.request("GetDetectInfoEnhanced", req, cb)
  }

  /**
   * 银行卡基础信息查询
   */
  async CheckBankCardInformation(
    req: CheckBankCardInformationRequest,
    cb?: (error: string, rep: CheckBankCardInformationResponse) => void
  ): Promise<CheckBankCardInformationResponse> {
    return this.request("CheckBankCardInformation", req, cb)
  }
}
