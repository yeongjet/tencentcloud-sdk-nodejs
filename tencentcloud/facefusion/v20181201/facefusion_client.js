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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const FaceFusionRequest = models.FaceFusionRequest;
const FaceFusionResponse = models.FaceFusionResponse;
const FuseFaceReviewResult = models.FuseFaceReviewResult;
const FuseFaceReviewDetail = models.FuseFaceReviewDetail;


/**
 * facefusion client
 * @class
 */
class FacefusionClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("facefusion.tencentcloudapi.com", "2018-12-01", credential, region, profile);
    }
    
    /**
     * 本接口用于人脸融合，用户上传人脸图片，获取与模板融合后的人脸图片。单个活动QPS限制50次/秒。
     * @param {FaceFusionRequest} req
     * @param {function(string, FaceFusionResponse):void} cb
     * @public
     */
    FaceFusion(req, cb) {
        let resp = new FaceFusionResponse();
        this.request("FaceFusion", req, resp, cb);
    }


}
module.exports = FacefusionClient;
