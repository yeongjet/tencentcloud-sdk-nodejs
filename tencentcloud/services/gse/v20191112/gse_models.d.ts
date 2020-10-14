/**
 * 游戏属性详情
 */
export interface GameProperty {
    /**
      * 属性名称
      */
    Key: string;
    /**
      * 属性值
      */
    Value: string;
}
/**
 * 基于规则的动态扩缩容配置项
 */
export interface TargetConfiguration {
    /**
      * 预留存率
注意：此字段可能返回 null，表示取不到有效值。
      */
    TargetValue: number;
}
/**
 * DeleteScalingPolicy请求参数结构体
 */
export interface DeleteScalingPolicyRequest {
    /**
      * 服务部署ID
      */
    FleetId: string;
    /**
      * 名称
      */
    Name?: string;
}
/**
 * 部署的玩家游戏会话
 */
export interface PlacedPlayerSession {
    /**
      * 玩家Id
      */
    PlayerId: string;
    /**
      * 玩家会话Id
      */
    PlayerSessionId: string;
}
/**
 * DescribeGameServerSessions返回参数结构体
 */
export interface DescribeGameServerSessionsResponse {
    /**
      * 游戏服务器会话列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    GameServerSessions?: Array<GameServerSession>;
    /**
      * 页偏移，用于查询下一页
注意：此字段可能返回 null，表示取不到有效值。
      */
    NextToken?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例信息
 */
export interface Instance {
    /**
      * 服务部署ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    FleetId: string;
    /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId: string;
    /**
      * IP地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    IpAddress: string;
    /**
      * dns
注意：此字段可能返回 null，表示取不到有效值。
      */
    DnsName: string;
    /**
      * 操作系统
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperatingSystem: string;
    /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
}
/**
 * DescribeGameServerSessionQueues返回参数结构体
 */
export interface DescribeGameServerSessionQueuesResponse {
    /**
      * 游戏服务器会话队列数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    GameServerSessionQueues?: Array<GameServerSessionQueue>;
    /**
      * 总数
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetInstanceAccess返回参数结构体
 */
export interface GetInstanceAccessResponse {
    /**
      * 实例登录所需要的凭据
      */
    InstanceAccess?: InstanceAccess;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * JoinGameServerSession请求参数结构体
 */
export interface JoinGameServerSessionRequest {
    /**
      * 游戏服务器会话ID
      */
    GameServerSessionId: string;
    /**
      * 玩家ID
      */
    PlayerId: string;
    /**
      * 玩家自定义信息
      */
    PlayerData?: string;
}
/**
 * DescribePlayerSessions返回参数结构体
 */
export interface DescribePlayerSessionsResponse {
    /**
      * 玩家会话列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    PlayerSessions?: Array<PlayerSession>;
    /**
      * 页偏移
注意：此字段可能返回 null，表示取不到有效值。
      */
    NextToken?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SetServerWeight返回参数结构体
 */
export interface SetServerWeightResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 玩家延迟信息
 */
export interface PlayerLatency {
    /**
      * 玩家Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    PlayerId?: string;
    /**
      * 延迟对应的区域名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegionIdentifier?: string;
    /**
      * 毫秒级延迟
      */
    LatencyInMilliseconds?: number;
}
/**
 * StopGameServerSessionPlacement请求参数结构体
 */
export interface StopGameServerSessionPlacementRequest {
    /**
      * 游戏服务器会话放置的唯一标识符
      */
    PlacementId: string;
}
/**
 * UpdateGameServerSession返回参数结构体
 */
export interface UpdateGameServerSessionResponse {
    /**
      * 更新后的游戏会话
      */
    GameServerSession?: GameServerSession;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 动态扩缩容配置
 */
export interface ScalingPolicy {
    /**
      * 服务部署ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    FleetId: string;
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 保留参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScalingAdjustment: string;
    /**
      * 保留参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScalingAdjustmentType: string;
    /**
      * 保留参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    ComparisonOperator: string;
    /**
      * 保留参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Threshold: string;
    /**
      * 保留参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    EvaluationPeriods: string;
    /**
      * 保留参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetricName: string;
    /**
      * 策略类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolicyType: string;
    /**
      * 基于规则的配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    TargetConfiguration: TargetConfiguration;
}
/**
 * GetInstanceAccess请求参数结构体
 */
export interface GetInstanceAccessRequest {
    /**
      * 服务部署Id
      */
    FleetId: string;
    /**
      * 实例Id
      */
    InstanceId: string;
}
/**
 * DescribeGameServerSessions请求参数结构体
 */
export interface DescribeGameServerSessionsRequest {
    /**
      * 别名ID
      */
    AliasId?: string;
    /**
      * 舰队ID
      */
    FleetId?: string;
    /**
      * 游戏服务器会话ID
      */
    GameServerSessionId?: string;
    /**
      * 单次查询记录数上限
      */
    Limit?: number;
    /**
      * 页偏移，用于查询下一页
      */
    NextToken?: string;
    /**
      * 游戏服务器会话状态(ACTIVE,ACTIVATING,TERMINATED,TERMINATING,ERROR)
      */
    StatusFilter?: string;
}
/**
 * UpdateGameServerSession请求参数结构体
 */
export interface UpdateGameServerSessionRequest {
    /**
      * 游戏服务器会话ID
      */
    GameServerSessionId: string;
    /**
      * 最大玩家数量
      */
    MaximumPlayerSessionCount?: number;
    /**
      * 游戏服务器会话名称
      */
    Name?: string;
    /**
      * 玩家会话创建策略（ACCEPT_ALL,DENY_ALL）
      */
    PlayerSessionCreationPolicy?: string;
    /**
      * 保护策略(NoProtection,TimeLimitProtection,FullProtection)
      */
    ProtectionPolicy?: string;
}
/**
 * StartMatchPlacement返回参数结构体
 */
export interface StartMatchPlacementResponse {
    /**
      * 游戏服务器会话放置
      */
    GameServerSessionPlacement?: GameServerSessionPlacement;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePlayerSessions请求参数结构体
 */
export interface DescribePlayerSessionsRequest {
    /**
      * 游戏服务器会话ID
      */
    GameServerSessionId?: string;
    /**
      * 单次查询记录数上限
      */
    Limit?: number;
    /**
      * 页偏移，用于查询下一页
      */
    NextToken?: string;
    /**
      * 玩家ID
      */
    PlayerId?: string;
    /**
      * 玩家会话ID
      */
    PlayerSessionId?: string;
    /**
      * 玩家会话状态（RESERVED,ACTIVE,COMPLETED,TIMEDOUT）
      */
    PlayerSessionStatusFilter?: string;
}
/**
 * StartGameServerSessionPlacement返回参数结构体
 */
export interface StartGameServerSessionPlacementResponse {
    /**
      * 游戏服务器会话放置
      */
    GameServerSessionPlacement?: GameServerSessionPlacement;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 访问实例所需要的凭据
 */
export interface Credentials {
    /**
      * ssh私钥
      */
    Secret: string;
    /**
      * 用户名
      */
    UserName: string;
}
/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
    /**
      * 实例信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Instances?: Array<Instance>;
    /**
      * 结果返回最大数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetGameServerSessionLogUrl请求参数结构体
 */
export interface GetGameServerSessionLogUrlRequest {
    /**
      * 游戏服务器会话ID
      */
    GameServerSessionId: string;
}
/**
 * StartMatchPlacement请求参数结构体
 */
export interface StartMatchPlacementRequest {
    /**
      * 开始部署游戏服务器会话的唯一标识符
      */
    PlacementId: string;
    /**
      * 游戏服务器会话队列名称
      */
    GameServerSessionQueueName: string;
    /**
      * 游戏服务器允许同时连接到游戏会话的最大玩家数量
      */
    MaximumPlayerSessionCount: number;
    /**
      * 玩家游戏会话信息
      */
    DesiredPlayerSessions?: Array<DesiredPlayerSession>;
    /**
      * 玩家游戏会话属性
      */
    GameProperties?: Array<GameProperty>;
    /**
      * 游戏服务器会话数据
      */
    GameServerSessionData?: string;
    /**
      * 游戏服务器会话名称
      */
    GameServerSessionName?: string;
    /**
      * 玩家延迟
      */
    PlayerLatencies?: Array<PlayerLatency>;
    /**
      * 游戏匹配数据
      */
    MatchmakerData?: string;
}
/**
 * CreateGameServerSession返回参数结构体
 */
export interface CreateGameServerSessionResponse {
    /**
      * 游戏服务器会话
注意：此字段可能返回 null，表示取不到有效值。
      */
    GameServerSession?: GameServerSession;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
    /**
      * 服务部署ID
      */
    FleetId?: string;
    /**
      * 实例ID
      */
    InstanceId?: string;
    /**
      * 结果返回最大数量
      */
    Offset?: number;
    /**
      * 返回结果偏移
      */
    Limit?: number;
}
/**
 * DescribeScalingPolicies请求参数结构体
 */
export interface DescribeScalingPoliciesRequest {
    /**
      * 服务部署ID
      */
    FleetId?: string;
    /**
      * 状态过滤条件
      */
    StatusFilter?: string;
    /**
      * 结果返回最大数量
      */
    Offset?: number;
    /**
      * 返回结果偏移
      */
    Limit?: number;
}
/**
 * DescribeGameServerSessionDetails返回参数结构体
 */
export interface DescribeGameServerSessionDetailsResponse {
    /**
      * 游戏服务器会话详情列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    GameServerSessionDetails?: Array<GameServerSessionDetail>;
    /**
      * 页偏移，用于查询下一页
注意：此字段可能返回 null，表示取不到有效值。
      */
    NextToken?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 延迟策略
 */
export interface PlayerLatencyPolicy {
    /**
      * 任意player允许的最大延迟，单位：毫秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaximumIndividualPlayerLatencyMilliseconds: number;
    /**
      * 放置新GameServerSession时强制实施策略的时间长度，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolicyDurationSeconds?: number;
}
/**
 * PutScalingPolicy返回参数结构体
 */
export interface PutScalingPolicyResponse {
    /**
      * 规则名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * JoinGameServerSession返回参数结构体
 */
export interface JoinGameServerSessionResponse {
    /**
      * 玩家会话
注意：此字段可能返回 null，表示取不到有效值。
      */
    PlayerSession?: PlayerSession;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 玩家游戏会话信息
 */
export interface DesiredPlayerSession {
    /**
      * 与玩家会话关联的唯一玩家标识
      */
    PlayerId: string;
    /**
      * 开发人员定义的玩家数据
      */
    PlayerData: string;
}
/**
 * SearchGameServerSessions返回参数结构体
 */
export interface SearchGameServerSessionsResponse {
    /**
      * 游戏服务器会话列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    GameServerSessions?: Array<GameServerSession>;
    /**
      * 页偏移，用于查询下一页
注意：此字段可能返回 null，表示取不到有效值。
      */
    NextToken?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeGameServerSessionPlacement请求参数结构体
 */
export interface DescribeGameServerSessionPlacementRequest {
    /**
      * 游戏服务器会话放置的唯一标识符
      */
    PlacementId: string;
}
/**
 * DescribeScalingPolicies返回参数结构体
 */
export interface DescribeScalingPoliciesResponse {
    /**
      * 动态扩缩容配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScalingPolicies?: Array<ScalingPolicy>;
    /**
      * 返回总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 服务部署组目的集合
 */
export interface GameServerSessionQueueDestination {
    /**
      * 服务部署组目的的资源描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    DestinationArn?: string;
}
/**
 * 游戏会话部署对象
 */
export interface GameServerSessionPlacement {
    /**
      * 部署Id
      */
    PlacementId: string;
    /**
      * 服务部署组名称
      */
    GameServerSessionQueueName: string;
    /**
      * 玩家延迟
注意：此字段可能返回 null，表示取不到有效值。
      */
    PlayerLatencies: Array<PlayerLatency>;
    /**
      * 服务部署状态
      */
    Status: string;
    /**
      * 分配给正在运行游戏会话的实例的DNS标识符
注意：此字段可能返回 null，表示取不到有效值。
      */
    DnsName: string;
    /**
      * 游戏会话Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    GameServerSessionId: string;
    /**
      * 游戏会话名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    GameServerSessionName: string;
    /**
      * 服务部署区域
注意：此字段可能返回 null，表示取不到有效值。
      */
    GameServerSessionRegion: string;
    /**
      * 游戏属性
注意：此字段可能返回 null，表示取不到有效值。
      */
    GameProperties: Array<GameProperty>;
    /**
      * 最大玩家数量
      */
    MaximumPlayerSessionCount: number;
    /**
      * 游戏会话数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    GameServerSessionData: string;
    /**
      * 运行游戏会话的实例的IP地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    IpAddress: string;
    /**
      * 运行游戏会话的实例的端口号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port: number;
    /**
      * 游戏匹配数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    MatchmakerData: string;
    /**
      * 部署的玩家游戏数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    PlacedPlayerSessions: Array<PlacedPlayerSession>;
    /**
      * 开始时间
      */
    StartTime: string;
    /**
      * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: string;
}
/**
 * 服务部署组对象
 */
export interface GameServerSessionQueue {
    /**
      * 服务部署组名字
      */
    Name: string;
    /**
      * 服务部署组资源
      */
    GameServerSessionQueueArn: string;
    /**
      * 目的fleet（可为别名）列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Destinations: Array<GameServerSessionQueueDestination>;
    /**
      * 延迟策略集合
注意：此字段可能返回 null，表示取不到有效值。
      */
    PlayerLatencyPolicies: Array<PlayerLatencyPolicy>;
    /**
      * 超时时间
      */
    TimeoutInSeconds: number;
}
/**
 * SetServerWeight请求参数结构体
 */
export interface SetServerWeightRequest {
    /**
      * 服务舰队ID
      */
    FleetId: string;
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 权重
      */
    Weight: number;
}
/**
 * 玩家会话详情
 */
export interface PlayerSession {
    /**
      * 玩家会话创建时间
      */
    CreationTime: string;
    /**
      * 游戏服务器会话运行的DNS标识
注意：此字段可能返回 null，表示取不到有效值。
      */
    DnsName: string;
    /**
      * 舰队ID
      */
    FleetId: string;
    /**
      * 游戏服务器会话ID
      */
    GameServerSessionId: string;
    /**
      * 游戏服务器会话运行的CVM地址
      */
    IpAddress: string;
    /**
      * 玩家相关信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    PlayerData: string;
    /**
      * 玩家ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    PlayerId: string;
    /**
      * 玩家会话ID
      */
    PlayerSessionId: string;
    /**
      * 端口号
      */
    Port: number;
    /**
      * 玩家会话的状态
      */
    Status: string;
    /**
      * 玩家会话终止时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    TerminationTime: string;
}
/**
 * CreateGameServerSession请求参数结构体
 */
export interface CreateGameServerSessionRequest {
    /**
      * 最大玩家数量
      */
    MaximumPlayerSessionCount: number;
    /**
      * 别名ID。每个请求需要指定别名ID 或者舰队 ID，如果两个同时指定时，优先选择舰队 ID
      */
    AliasId?: string;
    /**
      * 创建者ID
      */
    CreatorId?: string;
    /**
      * 舰队ID。每个请求需要指定别名ID 或者舰队 ID，如果两个同时指定时，优先选择舰队 ID
      */
    FleetId?: string;
    /**
      * 游戏属性
      */
    GameProperties?: Array<GameProperty>;
    /**
      * 游戏服务器会话属性详情
      */
    GameServerSessionData?: string;
    /**
      * 游戏服务器会话自定义ID
      */
    GameServerSessionId?: string;
    /**
      * 幂等token
      */
    IdempotencyToken?: string;
    /**
      * 游戏服务器会话名称
      */
    Name?: string;
}
/**
 * GetGameServerSessionLogUrl返回参数结构体
 */
export interface GetGameServerSessionLogUrlResponse {
    /**
      * 日志下载URL
注意：此字段可能返回 null，表示取不到有效值。
      */
    PreSignedUrl?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 游戏服务器会话详情（GameServerSessionDetail）
 */
export interface GameServerSessionDetail {
    /**
      * 游戏服务器会话
      */
    GameServerSession: GameServerSession;
    /**
      * 保护策略，可选（NoProtection,FullProtection）
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProtectionPolicy: string;
}
/**
 * DescribeGameServerSessionDetails请求参数结构体
 */
export interface DescribeGameServerSessionDetailsRequest {
    /**
      * 别名ID
      */
    AliasId?: string;
    /**
      * 舰队ID
      */
    FleetId?: string;
    /**
      * 游戏服务器会话ID
      */
    GameServerSessionId?: string;
    /**
      * 单次查询记录数上限
      */
    Limit?: number;
    /**
      * 页偏移，用于查询下一页
      */
    NextToken?: string;
    /**
      * 游戏服务器会话状态(ACTIVE,ACTIVATING,TERMINATED,TERMINATING,ERROR)
      */
    StatusFilter?: string;
}
/**
 * StartGameServerSessionPlacement请求参数结构体
 */
export interface StartGameServerSessionPlacementRequest {
    /**
      * 开始部署游戏服务器会话的唯一标识符
      */
    PlacementId: string;
    /**
      * 游戏服务器会话队列名称
      */
    GameServerSessionQueueName: string;
    /**
      * 游戏服务器允许同时连接到游戏会话的最大玩家数量
      */
    MaximumPlayerSessionCount: number;
    /**
      * 玩家游戏会话信息
      */
    DesiredPlayerSessions?: Array<DesiredPlayerSession>;
    /**
      * 玩家游戏会话属性
      */
    GameProperties?: Array<GameProperty>;
    /**
      * 游戏服务器会话数据
      */
    GameServerSessionData?: string;
    /**
      * 游戏服务器会话名称
      */
    GameServerSessionName?: string;
    /**
      * 玩家延迟
      */
    PlayerLatencies?: Array<PlayerLatency>;
}
/**
 * 游戏会话详情
 */
export interface GameServerSession {
    /**
      * 游戏服务器会话创建时间
      */
    CreationTime: string;
    /**
      * 创建者ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatorId: string;
    /**
      * 当前玩家数量
      */
    CurrentPlayerSessionCount: number;
    /**
      * CVM的DNS标识符
注意：此字段可能返回 null，表示取不到有效值。
      */
    DnsName: string;
    /**
      * 舰队ID
      */
    FleetId: string;
    /**
      * 游戏属性
注意：此字段可能返回 null，表示取不到有效值。
      */
    GameProperties: Array<GameProperty>;
    /**
      * 游戏服务器会话属性详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    GameServerSessionData: string;
    /**
      * 游戏服务器会话ID
      */
    GameServerSessionId: string;
    /**
      * CVM IP地址
      */
    IpAddress: string;
    /**
      * 对战进程详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    MatchmakerData: string;
    /**
      * 最大玩家数量
      */
    MaximumPlayerSessionCount: number;
    /**
      * 游戏服务器会话名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 玩家会话创建策略
注意：此字段可能返回 null，表示取不到有效值。
      */
    PlayerSessionCreationPolicy: string;
    /**
      * 端口号
      */
    Port: number;
    /**
      * 游戏服务器会话状态
      */
    Status: string;
    /**
      * 游戏服务器会话状态附加信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusReason: string;
    /**
      * 终止的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    TerminationTime: string;
    /**
      * 实例类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceType: string;
    /**
      * 当前自定义数
注意：此字段可能返回 null，表示取不到有效值。
      */
    CurrentCustomCount: number;
    /**
      * 最大自定义数
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxCustomCount: number;
    /**
      * 权重
注意：此字段可能返回 null，表示取不到有效值。
      */
    Weight: number;
    /**
      * 会话可用性状态，是否被屏蔽
注意：此字段可能返回 null，表示取不到有效值。
      */
    AvailabilityStatus: string;
}
/**
 * DescribeGameServerSessionQueues请求参数结构体
 */
export interface DescribeGameServerSessionQueuesRequest {
    /**
      * 游戏服务器会话队列数组
      */
    Names?: Array<string>;
    /**
      * 要返回的最大结果数
      */
    Limit?: number;
    /**
      * 偏移
      */
    Offset?: number;
}
/**
 * DeleteScalingPolicy返回参数结构体
 */
export interface DeleteScalingPolicyResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeGameServerSessionPlacement返回参数结构体
 */
export interface DescribeGameServerSessionPlacementResponse {
    /**
      * 游戏服务器会话放置
      */
    GameServerSessionPlacement?: GameServerSessionPlacement;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SearchGameServerSessions请求参数结构体
 */
export interface SearchGameServerSessionsRequest {
    /**
      * 别名ID
      */
    AliasId?: string;
    /**
      * 舰队ID
      */
    FleetId?: string;
    /**
      * 单次查询记录数上限
      */
    Limit?: number;
    /**
      * 页偏移，用于查询下一页
      */
    NextToken?: string;
    /**
      * 搜索条件表达式，支持如下变量
gameServerSessionName 游戏会话名称 String
gameServerSessionId 游戏会话ID String
maximumSessions 最大的玩家会话数 Number
creationTimeMillis 创建时间，单位：毫秒 Number
playerSessionCount 当前玩家会话数 Number
hasAvailablePlayerSessions 是否有可用玩家数 String 取值true或false
gameServerSessionProperties 游戏会话属性 String

表达式String类型 等于=，不等于<>判断
表示Number类型支持 =,<>,>,>=,<,<=
      */
    FilterExpression?: string;
    /**
      * 排序条件关键字
支持排序字段
gameServerSessionName 游戏会话名称 String
gameServerSessionId 游戏会话ID String
maximumSessions 最大的玩家会话数 Number
creationTimeMillis 创建时间，单位：毫秒 Number
playerSessionCount 当前玩家会话数 Number
      */
    SortExpression?: string;
}
/**
 * PutScalingPolicy请求参数结构体
 */
export interface PutScalingPolicyRequest {
    /**
      * 基于规则的扩缩容配置
      */
    FleetId: string;
    /**
      * 名称
      */
    Name?: string;
    /**
      * 调整值
      */
    ScalingAdjustment?: number;
    /**
      * 调整类型
      */
    ScalingAdjustmentType?: string;
    /**
      * 指标阈值
      */
    Threshold?: number;
    /**
      * 比较符
      */
    ComparisonOperator?: string;
    /**
      * 时间长度（分钟）
      */
    EvaluationPeriods?: number;
    /**
      * 指标名称
      */
    MetricName?: string;
    /**
      * 策略类型
      */
    PolicyType?: string;
    /**
      * 扩缩容配置类型
      */
    TargetConfiguration?: TargetConfiguration;
}
/**
 * StopGameServerSessionPlacement返回参数结构体
 */
export interface StopGameServerSessionPlacementResponse {
    /**
      * 游戏服务器会话放置
      */
    GameServerSessionPlacement?: GameServerSessionPlacement;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例访问凭证信息
 */
export interface InstanceAccess {
    /**
      * 访问实例所需要的凭据
      */
    Credentials: Credentials;
    /**
      * 服务部署Id
      */
    FleetId: string;
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 实例公网IP
      */
    IpAddress: string;
    /**
      * 操作系统
      */
    OperatingSystem: string;
}
