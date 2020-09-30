import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { DeleteScalingPolicyRequest, DescribeGameServerSessionsResponse, DescribeGameServerSessionQueuesResponse, GetInstanceAccessResponse, JoinGameServerSessionRequest, DescribePlayerSessionsResponse, SetServerWeightResponse, StopGameServerSessionPlacementRequest, UpdateGameServerSessionResponse, GetInstanceAccessRequest, DescribeGameServerSessionsRequest, UpdateGameServerSessionRequest, StartMatchPlacementResponse, DescribePlayerSessionsRequest, StartGameServerSessionPlacementResponse, DescribeInstancesResponse, GetGameServerSessionLogUrlRequest, StartMatchPlacementRequest, CreateGameServerSessionResponse, DescribeInstancesRequest, DescribeScalingPoliciesRequest, DescribeGameServerSessionDetailsResponse, PutScalingPolicyResponse, JoinGameServerSessionResponse, SearchGameServerSessionsResponse, DescribeGameServerSessionPlacementRequest, DescribeScalingPoliciesResponse, SetServerWeightRequest, CreateGameServerSessionRequest, GetGameServerSessionLogUrlResponse, DescribeGameServerSessionDetailsRequest, StartGameServerSessionPlacementRequest, DescribeGameServerSessionQueuesRequest, DeleteScalingPolicyResponse, DescribeGameServerSessionPlacementResponse, SearchGameServerSessionsRequest, PutScalingPolicyRequest, StopGameServerSessionPlacementResponse } from "./gse_models";
/**
 * gse client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（UpdateGameServerSession）用于更新游戏服务器会话
     */
    UpdateGameServerSession(req: UpdateGameServerSessionRequest, cb?: (error: string, rep: UpdateGameServerSessionResponse) => void): Promise<UpdateGameServerSessionResponse>;
    /**
     * 用于查询服务部署的动态扩缩容配置
     */
    DescribeScalingPolicies(req: DescribeScalingPoliciesRequest, cb?: (error: string, rep: DescribeScalingPoliciesResponse) => void): Promise<DescribeScalingPoliciesResponse>;
    /**
     * 用于查询服务器实例列表
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 本接口（DescribeGameServerSessions）用于查询游戏服务器会话列表
     */
    DescribeGameServerSessions(req: DescribeGameServerSessionsRequest, cb?: (error: string, rep: DescribeGameServerSessionsResponse) => void): Promise<DescribeGameServerSessionsResponse>;
    /**
     * 获取实例登录所需要的凭据
     */
    GetInstanceAccess(req: GetInstanceAccessRequest, cb?: (error: string, rep: GetInstanceAccessResponse) => void): Promise<GetInstanceAccessResponse>;
    /**
     * 本接口（JoinGameServerSession）用于加入游戏服务器会话
     */
    JoinGameServerSession(req: JoinGameServerSessionRequest, cb?: (error: string, rep: JoinGameServerSessionResponse) => void): Promise<JoinGameServerSessionResponse>;
    /**
     * 本接口（DescribeGameServerSessionPlacement）用于查询游戏服务器会话的放置
     */
    DescribeGameServerSessionPlacement(req: DescribeGameServerSessionPlacementRequest, cb?: (error: string, rep: DescribeGameServerSessionPlacementResponse) => void): Promise<DescribeGameServerSessionPlacementResponse>;
    /**
     * 本接口（DescribeGameServerSessionDetails）用于查询游戏服务器会话详情列表
     */
    DescribeGameServerSessionDetails(req: DescribeGameServerSessionDetailsRequest, cb?: (error: string, rep: DescribeGameServerSessionDetailsResponse) => void): Promise<DescribeGameServerSessionDetailsResponse>;
    /**
     * 用于设置动态扩缩容配置
     */
    PutScalingPolicy(req: PutScalingPolicyRequest, cb?: (error: string, rep: PutScalingPolicyResponse) => void): Promise<PutScalingPolicyResponse>;
    /**
     * 本接口（StartGameServerSessionPlacement）用于开始放置游戏服务器会话
     */
    StartGameServerSessionPlacement(req: StartGameServerSessionPlacementRequest, cb?: (error: string, rep: StartGameServerSessionPlacementResponse) => void): Promise<StartGameServerSessionPlacementResponse>;
    /**
     * 设置服务器权重
     */
    SetServerWeight(req: SetServerWeightRequest, cb?: (error: string, rep: SetServerWeightResponse) => void): Promise<SetServerWeightResponse>;
    /**
     * 本接口（StartMatchPlacement）用于开始匹配放置游戏服务器会话
     */
    StartMatchPlacement(req: StartMatchPlacementRequest, cb?: (error: string, rep: StartMatchPlacementResponse) => void): Promise<StartMatchPlacementResponse>;
    /**
     * 本接口（StopGameServerSessionPlacement）用于停止放置游戏服务器会话
     */
    StopGameServerSessionPlacement(req: StopGameServerSessionPlacementRequest, cb?: (error: string, rep: StopGameServerSessionPlacementResponse) => void): Promise<StopGameServerSessionPlacementResponse>;
    /**
     * 本接口（DescribePlayerSessions）用于获取玩家会话列表
     */
    DescribePlayerSessions(req: DescribePlayerSessionsRequest, cb?: (error: string, rep: DescribePlayerSessionsResponse) => void): Promise<DescribePlayerSessionsResponse>;
    /**
     * 本接口（GetGameServerSessionLogUrl）用于获取游戏服务器会话的日志URL
     */
    GetGameServerSessionLogUrl(req: GetGameServerSessionLogUrlRequest, cb?: (error: string, rep: GetGameServerSessionLogUrlResponse) => void): Promise<GetGameServerSessionLogUrlResponse>;
    /**
     * 本接口（SearchGameServerSessions）用于搜索游戏服务器会话列表
     */
    SearchGameServerSessions(req: SearchGameServerSessionsRequest, cb?: (error: string, rep: SearchGameServerSessionsResponse) => void): Promise<SearchGameServerSessionsResponse>;
    /**
     * 用于删除扩缩容配置
     */
    DeleteScalingPolicy(req: DeleteScalingPolicyRequest, cb?: (error: string, rep: DeleteScalingPolicyResponse) => void): Promise<DeleteScalingPolicyResponse>;
    /**
     * 本接口（CreateGameServerSession）用于创建游戏服务会话
     */
    CreateGameServerSession(req: CreateGameServerSessionRequest, cb?: (error: string, rep: CreateGameServerSessionResponse) => void): Promise<CreateGameServerSessionResponse>;
    /**
     * 本接口（DescribeGameServerSessionQueues）用于查询游戏服务器会话队列
     */
    DescribeGameServerSessionQueues(req: DescribeGameServerSessionQueuesRequest, cb?: (error: string, rep: DescribeGameServerSessionQueuesResponse) => void): Promise<DescribeGameServerSessionQueuesResponse>;
}
