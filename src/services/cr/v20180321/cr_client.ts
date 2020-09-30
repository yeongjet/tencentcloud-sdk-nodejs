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
  UploadFileRequest,
  UploadFileResponse,
  UploadDataJsonResponse,
  DescribeTaskStatusResponse,
  DownloadReportRequest,
  ApplyCreditAuditResponse,
  UploadDataFileResponse,
  SingleBlackApply,
  SingleRecord,
  QueryInstantDataResponse,
  DownloadRecordListRequest,
  UploadDataJsonRequest,
  DescribeCreditResultResponse,
  DownloadDialogueTextResponse,
  QueryInstantDataRequest,
  ApplyBlackListResponse,
  DescribeRecordsRequest,
  DescribeCreditResultRequest,
  ApplyBlackListRequest,
  ApplyCreditAuditRequest,
  DownloadReportResponse,
  DownloadRecordListResponse,
  UploadDataFileRequest,
  DescribeTaskStatusRequest,
  DescribeRecordsResponse,
  DownloadDialogueTextRequest,
} from "./cr_models"

/**
 * cr client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cr.tencentcloudapi.com", "2018-03-21", clientConfig)
  }

  /**
   * 用于下载结果报表。当日23:00后，可获取当日到期/逾期提醒结果，次日00:30后，可获取昨日回访结果。
   */
  async DownloadReport(
    req: DownloadReportRequest,
    cb?: (error: string, rep: DownloadReportResponse) => void
  ): Promise<DownloadReportResponse> {
    return this.request("DownloadReport", req, cb)
  }

  /**
   * 客户通过调用该接口上传需催收文档，格式需为excel格式。接口返回任务ID。
   */
  async UploadFile(
    req: UploadFileRequest,
    cb?: (error: string, rep: UploadFileResponse) => void
  ): Promise<UploadFileResponse> {
    return this.request("UploadFile", req, cb)
  }

  /**
   * 上传Json格式数据，接口返回数据任务ID
   */
  async UploadDataJson(
    req: UploadDataJsonRequest,
    cb?: (error: string, rep: UploadDataJsonResponse) => void
  ): Promise<UploadDataJsonResponse> {
    return this.request("UploadDataJson", req, cb)
  }

  /**
   * 用于获取指定案件的录音地址，次日早上8:00后可查询前日录音。
   */
  async DescribeRecords(
    req: DescribeRecordsRequest,
    cb?: (error: string, rep: DescribeRecordsResponse) => void
  ): Promise<DescribeRecordsResponse> {
    return this.request("DescribeRecords", req, cb)
  }

  /**
   * 根据信审任务ID和请求日期，获取相关信审结果。
   */
  async DescribeCreditResult(
    req: DescribeCreditResultRequest,
    cb?: (error: string, rep: DescribeCreditResultResponse) => void
  ): Promise<DescribeCreditResultResponse> {
    return this.request("DescribeCreditResult", req, cb)
  }

  /**
   * 用于获取指定案件的对话文本内容，次日早上8:00后可查询前日对话文本内容。
   */
  async DownloadDialogueText(
    req: DownloadDialogueTextRequest,
    cb?: (error: string, rep: DownloadDialogueTextResponse) => void
  ): Promise<DownloadDialogueTextResponse> {
    return this.request("DownloadDialogueText", req, cb)
  }

  /**
   * 根据上传文件接口的输出参数DataResId，获取相关上传结果。
   */
  async DescribeTaskStatus(
    req: DescribeTaskStatusRequest,
    cb?: (error: string, rep: DescribeTaskStatusResponse) => void
  ): Promise<DescribeTaskStatusResponse> {
    return this.request("DescribeTaskStatus", req, cb)
  }

  /**
   * 上传文件，接口返回数据任务ID，支持xlsx、xls、csv、zip格式。
   */
  async UploadDataFile(
    req: UploadDataFileRequest,
    cb?: (error: string, rep: UploadDataFileResponse) => void
  ): Promise<UploadDataFileResponse> {
    let options = {
      multipart: true,
    }
    return this.request("UploadDataFile", req, cb)
  }

  /**
   * 实时数据查询
   */
  async QueryInstantData(
    req: QueryInstantDataRequest,
    cb?: (error: string, rep: QueryInstantDataResponse) => void
  ): Promise<QueryInstantDataResponse> {
    return this.request("QueryInstantData", req, cb)
  }

  /**
     * <p>用于获取录音下载链接清单，次日早上8:00后可查询前日录音清单。</p>
<p>注意：录音清单中的录音下载链接仅次日20:00之前有效，请及时下载。</p>
     */
  async DownloadRecordList(
    req: DownloadRecordListRequest,
    cb?: (error: string, rep: DownloadRecordListResponse) => void
  ): Promise<DownloadRecordListResponse> {
    return this.request("DownloadRecordList", req, cb)
  }

  /**
   * 提交黑名单后，黑名单中有效期内的号码将停止拨打，适用于到期/逾期提醒、回访场景。
   */
  async ApplyBlackList(
    req: ApplyBlackListRequest,
    cb?: (error: string, rep: ApplyBlackListResponse) => void
  ): Promise<ApplyBlackListResponse> {
    return this.request("ApplyBlackList", req, cb)
  }

  /**
   * 提交信审外呼申请，返回当次请求日期。
   */
  async ApplyCreditAudit(
    req: ApplyCreditAuditRequest,
    cb?: (error: string, rep: ApplyCreditAuditResponse) => void
  ): Promise<ApplyCreditAuditResponse> {
    return this.request("ApplyCreditAudit", req, cb)
  }
}
