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
  TagTaskResult,
  TagTaskResultItem,
  CosInfo,
  SaveInfo,
  StripTaskResultItem,
  CosAuthMode,
  TagEditingInfo,
  OpeningEndingTaskResultItem,
  DownInfo,
  ClassificationEditingInfo,
  DescribeEditingTaskResultRequest,
  CoverTaskResultItem,
  StripEditingInfo,
  EditingInfo,
  CreateEditingTaskRequest,
  HighlightsTaskResult,
  OpeningEndingTaskResult,
  DescribeEditingTaskResultResponse,
  CreateEditingTaskResponse,
  UrlInfo,
  ClassificationTaskResultItem,
  EditingTaskResult,
  StripTaskResult,
  HighlightsEditingInfo,
  ClassificationTaskResult,
  HighlightsTaskResultItem,
  HighlightsTaskResultItemSegment,
  CoverEditingInfo,
  CallbackInfo,
  OpeningEndingEditingInfo,
  CoverTaskResult,
} from "./ie_models"

/**
 * ie client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ie.tencentcloudapi.com", "2020-03-04", clientConfig)
  }

  /**
   * 获取智能编辑任务结果。
   */
  async DescribeEditingTaskResult(
    req: DescribeEditingTaskResultRequest,
    cb?: (error: string, rep: DescribeEditingTaskResultResponse) => void
  ): Promise<DescribeEditingTaskResultResponse> {
    return this.request("DescribeEditingTaskResult", req, cb)
  }

  /**
   * 创建智能编辑任务，可以同时选择视频标签识别、分类识别、智能拆条、智能集锦、智能封面和片头片尾识别中的一项或者多项能力。
   */
  async CreateEditingTask(
    req: CreateEditingTaskRequest,
    cb?: (error: string, rep: CreateEditingTaskResponse) => void
  ): Promise<CreateEditingTaskResponse> {
    return this.request("CreateEditingTask", req, cb)
  }
}
