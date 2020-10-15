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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  Canvas,
  LayoutParams,
  SetVideoGenerationTaskCallbackRequest,
  StreamControl,
  StopOnlineRecordResponse,
  SetVideoGenerationTaskCallbackKeyRequest,
  OmittedDuration,
  DescribeVideoGenerationTaskCallbackResponse,
  ResumeOnlineRecordResponse,
  SetVideoGenerationTaskCallbackResponse,
  StartOnlineRecordRequest,
  DescribeOnlineRecordCallbackRequest,
  DescribeOnlineRecordCallbackResponse,
  SetTranscodeCallbackResponse,
  StopOnlineRecordRequest,
  SetVideoGenerationTaskCallbackKeyResponse,
  CreateTranscodeResponse,
  DescribeVideoGenerationTaskResponse,
  VideoInfo,
  CustomLayout,
  SetTranscodeCallbackKeyResponse,
  Concat,
  DescribeOnlineRecordRequest,
  StartOnlineRecordResponse,
  Whiteboard,
  DescribeVideoGenerationTaskRequest,
  CreateVideoGenerationTaskResponse,
  PauseOnlineRecordResponse,
  CreateTranscodeRequest,
  SetOnlineRecordCallbackKeyResponse,
  DescribeOnlineRecordResponse,
  SetTranscodeCallbackKeyRequest,
  DescribeTranscodeRequest,
  DescribeTranscodeResponse,
  StreamLayout,
  SetOnlineRecordCallbackResponse,
  SetOnlineRecordCallbackKeyRequest,
  CreateVideoGenerationTaskRequest,
  DescribeTranscodeCallbackRequest,
  ResumeOnlineRecordRequest,
  DescribeTranscodeCallbackResponse,
  SetTranscodeCallbackRequest,
  RecordControl,
  SetOnlineRecordCallbackRequest,
  MixStream,
  DescribeVideoGenerationTaskCallbackRequest,
  PauseOnlineRecordRequest,
} from "./tiw_models"

/**
 * tiw client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tiw.tencentcloudapi.com", "2019-09-19", clientConfig)
  }

  /**
   * 设置实时录制回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40258
   */
  async SetOnlineRecordCallback(
    req: SetOnlineRecordCallbackRequest,
    cb?: (error: string, rep: SetOnlineRecordCallbackResponse) => void
  ): Promise<SetOnlineRecordCallbackResponse> {
    return this.request("SetOnlineRecordCallback", req, cb)
  }

  /**
   * 设置文档转码回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  async SetTranscodeCallbackKey(
    req: SetTranscodeCallbackKeyRequest,
    cb?: (error: string, rep: SetTranscodeCallbackKeyResponse) => void
  ): Promise<SetTranscodeCallbackKeyResponse> {
    return this.request("SetTranscodeCallbackKey", req, cb)
  }

  /**
   * 发起一个实时录制任务
   */
  async StartOnlineRecord(
    req: StartOnlineRecordRequest,
    cb?: (error: string, rep: StartOnlineRecordResponse) => void
  ): Promise<StartOnlineRecordResponse> {
    return this.request("StartOnlineRecord", req, cb)
  }

  /**
   * 查询文档转码任务的执行进度与转码结果
   */
  async DescribeTranscode(
    req: DescribeTranscodeRequest,
    cb?: (error: string, rep: DescribeTranscodeResponse) => void
  ): Promise<DescribeTranscodeResponse> {
    return this.request("DescribeTranscode", req, cb)
  }

  /**
   * 创建一个文档转码任务
   */
  async CreateTranscode(
    req: CreateTranscodeRequest,
    cb?: (error: string, rep: CreateTranscodeResponse) => void
  ): Promise<CreateTranscodeResponse> {
    return this.request("CreateTranscode", req, cb)
  }

  /**
   * 查询录制视频生成回调地址
   */
  async DescribeVideoGenerationTaskCallback(
    req: DescribeVideoGenerationTaskCallbackRequest,
    cb?: (error: string, rep: DescribeVideoGenerationTaskCallbackResponse) => void
  ): Promise<DescribeVideoGenerationTaskCallbackResponse> {
    return this.request("DescribeVideoGenerationTaskCallback", req, cb)
  }

  /**
   * 停止实时录制
   */
  async StopOnlineRecord(
    req: StopOnlineRecordRequest,
    cb?: (error: string, rep: StopOnlineRecordResponse) => void
  ): Promise<StopOnlineRecordResponse> {
    return this.request("StopOnlineRecord", req, cb)
  }

  /**
   * 设置文档转码回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260
   */
  async SetTranscodeCallback(
    req: SetTranscodeCallbackRequest,
    cb?: (error: string, rep: SetTranscodeCallbackResponse) => void
  ): Promise<SetTranscodeCallbackResponse> {
    return this.request("SetTranscodeCallback", req, cb)
  }

  /**
   * 设置录制视频生成回调地址
   */
  async SetVideoGenerationTaskCallback(
    req: SetVideoGenerationTaskCallbackRequest,
    cb?: (error: string, rep: SetVideoGenerationTaskCallbackResponse) => void
  ): Promise<SetVideoGenerationTaskCallbackResponse> {
    return this.request("SetVideoGenerationTaskCallback", req, cb)
  }

  /**
   * 创建视频生成任务
   */
  async CreateVideoGenerationTask(
    req: CreateVideoGenerationTaskRequest,
    cb?: (error: string, rep: CreateVideoGenerationTaskResponse) => void
  ): Promise<CreateVideoGenerationTaskResponse> {
    return this.request("CreateVideoGenerationTask", req, cb)
  }

  /**
   * 设置实时录制回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  async SetOnlineRecordCallbackKey(
    req: SetOnlineRecordCallbackKeyRequest,
    cb?: (error: string, rep: SetOnlineRecordCallbackKeyResponse) => void
  ): Promise<SetOnlineRecordCallbackKeyResponse> {
    return this.request("SetOnlineRecordCallbackKey", req, cb)
  }

  /**
   * 暂停实时录制
   */
  async PauseOnlineRecord(
    req: PauseOnlineRecordRequest,
    cb?: (error: string, rep: PauseOnlineRecordResponse) => void
  ): Promise<PauseOnlineRecordResponse> {
    return this.request("PauseOnlineRecord", req, cb)
  }

  /**
   * 查询文档转码回调地址
   */
  async DescribeTranscodeCallback(
    req: DescribeTranscodeCallbackRequest,
    cb?: (error: string, rep: DescribeTranscodeCallbackResponse) => void
  ): Promise<DescribeTranscodeCallbackResponse> {
    return this.request("DescribeTranscodeCallback", req, cb)
  }

  /**
   * 查询录制任务状态与结果
   */
  async DescribeOnlineRecord(
    req: DescribeOnlineRecordRequest,
    cb?: (error: string, rep: DescribeOnlineRecordResponse) => void
  ): Promise<DescribeOnlineRecordResponse> {
    return this.request("DescribeOnlineRecord", req, cb)
  }

  /**
   * 设置视频生成回调鉴权密钥
   */
  async SetVideoGenerationTaskCallbackKey(
    req: SetVideoGenerationTaskCallbackKeyRequest,
    cb?: (error: string, rep: SetVideoGenerationTaskCallbackKeyResponse) => void
  ): Promise<SetVideoGenerationTaskCallbackKeyResponse> {
    return this.request("SetVideoGenerationTaskCallbackKey", req, cb)
  }

  /**
   * 查询实时录制回调地址
   */
  async DescribeOnlineRecordCallback(
    req: DescribeOnlineRecordCallbackRequest,
    cb?: (error: string, rep: DescribeOnlineRecordCallbackResponse) => void
  ): Promise<DescribeOnlineRecordCallbackResponse> {
    return this.request("DescribeOnlineRecordCallback", req, cb)
  }

  /**
   * 恢复实时录制
   */
  async ResumeOnlineRecord(
    req: ResumeOnlineRecordRequest,
    cb?: (error: string, rep: ResumeOnlineRecordResponse) => void
  ): Promise<ResumeOnlineRecordResponse> {
    return this.request("ResumeOnlineRecord", req, cb)
  }

  /**
   * 查询录制视频生成任务状态与结果
   */
  async DescribeVideoGenerationTask(
    req: DescribeVideoGenerationTaskRequest,
    cb?: (error: string, rep: DescribeVideoGenerationTaskResponse) => void
  ): Promise<DescribeVideoGenerationTaskResponse> {
    return this.request("DescribeVideoGenerationTask", req, cb)
  }
}
