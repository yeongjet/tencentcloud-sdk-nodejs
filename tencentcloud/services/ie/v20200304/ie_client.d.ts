import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { DescribeEditingTaskResultRequest, CreateEditingTaskRequest, DescribeEditingTaskResultResponse, CreateEditingTaskResponse } from "./ie_models";
/**
 * ie client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取智能编辑任务结果。
     */
    DescribeEditingTaskResult(req: DescribeEditingTaskResultRequest, cb?: (error: string, rep: DescribeEditingTaskResultResponse) => void): Promise<DescribeEditingTaskResultResponse>;
    /**
     * 创建智能编辑任务，可以同时选择视频标签识别、分类识别、智能拆条、智能集锦、智能封面和片头片尾识别中的一项或者多项能力。
     */
    CreateEditingTask(req: CreateEditingTaskRequest, cb?: (error: string, rep: CreateEditingTaskResponse) => void): Promise<CreateEditingTaskResponse>;
}
