/**
 * 视频标签识别结果信息
 */
export interface TagTaskResult {
    /**
        * 编辑任务状态。
  1：执行中；2：成功；3：失败。
        */
    Status: number;
    /**
        * 编辑任务失败错误码。
  0：成功；其他值：失败。
        */
    ErrCode: number;
    /**
     * 编辑任务失败错误描述。
     */
    ErrMsg: string;
    /**
        * 视频标签识别结果集。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ItemSet: Array<TagTaskResultItem>;
}
/**
 * 视频标签识别结果项
 */
export interface TagTaskResultItem {
    /**
     * 标签名称。
     */
    Tag: string;
    /**
     * 置信度，取值范围是 0 到 100。
     */
    Confidence: number;
}
/**
 * 任务视频cos信息
 */
export interface CosInfo {
    /**
     * cos 区域值。例如：ap-beijing。
     */
    Region: string;
    /**
     * cos 存储桶，格式为BuketName-AppId。例如：test-123456。
     */
    Bucket: string;
    /**
        * cos 路径。
  对于写表示目录，例如：/test；
  对于读表示文件路径，例如：/test/test.mp4。
        */
    Path: string;
    /**
     * cos 授权信息，不填默认为公有权限。
     */
    CosAuthMode?: CosAuthMode;
}
/**
 * 任务存储信息
 */
export interface SaveInfo {
    /**
        * 存储类型，可选值：
  1：CosInfo。
        */
    Type: number;
    /**
     * Cos形式存储信息，当Type等于1时必选。
     */
    CosInfo?: CosInfo;
}
/**
 * 智能拆条结果项
 */
export interface StripTaskResultItem {
    /**
     * 视频拆条片段地址。
     */
    SegmentUrl: string;
    /**
     * 拆条封面图片地址。
     */
    CovImgUrl: string;
    /**
     * 置信度，取值范围是 0 到 100。
     */
    Confidence: number;
    /**
     * 拆条片段起始的偏移时间，单位：秒。
     */
    StartTimeOffset: number;
    /**
     * 拆条片段终止的偏移时间，单位：秒。
     */
    EndTimeOffset: number;
}
/**
 * 任务视频cos授权信息
 */
export interface CosAuthMode {
    /**
        * 授权类型，可选值：
  0：bucket授权，需要将对应bucket授权给本服务帐号（3020447271），否则会读写cos失败；
  1：key托管，把cos的账号id和key托管于本服务，本服务会提供一个托管id；
  3：临时key授权。
  注意：目前智能编辑还不支持临时key授权。
        */
    Type: number;
    /**
     * cos账号托管id，Type等于1时必选。
     */
    HostedId?: string;
    /**
     * cos身份识别id，Type等于3时必选。
     */
    SecretId?: string;
    /**
     * cos身份秘钥，Type等于3时必选。
     */
    SecretKey?: string;
    /**
     * 临时授权 token，Type等于3时必选。
     */
    Token?: string;
}
/**
 * 视频标签识别任务参数信息
 */
export interface TagEditingInfo {
    /**
     * 是否开启视频标签识别。0为关闭，1为开启。其他非0非1值默认为0。
     */
    Switch: number;
    /**
     * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
     */
    CustomInfo?: string;
}
/**
 * 片头片尾识别结果项
 */
export interface OpeningEndingTaskResultItem {
    /**
     * 视频片头的结束时间点，单位：秒。
     */
    OpeningTimeOffset: number;
    /**
     * 片头识别置信度，取值范围是 0 到 100。
     */
    OpeningConfidence: number;
    /**
     * 视频片尾的开始时间点，单位：秒。
     */
    EndingTimeOffset: number;
    /**
     * 片尾识别置信度，取值范围是 0 到 100。
     */
    EndingConfidence: number;
}
/**
 * 视频源信息
 */
export interface DownInfo {
    /**
        * 下载类型，可选值：
  0：UrlInfo；
  1：CosInfo。
        */
    Type: number;
    /**
     * Url形式下载信息，当Type等于0时必选。
     */
    UrlInfo?: UrlInfo;
    /**
     * Cos形式下载信息，当Type等于1时必选。
     */
    CosInfo?: CosInfo;
}
/**
 * 视频分类识别任务参数信息
 */
export interface ClassificationEditingInfo {
    /**
     * 是否开启视频分类识别。0为关闭，1为开启。其他非0非1值默认为0。
     */
    Switch: number;
    /**
     * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
     */
    CustomInfo?: string;
}
/**
 * DescribeEditingTaskResult请求参数结构体
 */
export interface DescribeEditingTaskResultRequest {
    /**
     * 编辑任务 ID。
     */
    TaskId: string;
}
/**
 * 智能封面结果项
 */
export interface CoverTaskResultItem {
    /**
     * 智能封面地址。
     */
    CoverUrl: string;
    /**
     * 置信度，取值范围是 0 到 100。
     */
    Confidence: number;
}
/**
 * 智能拆条任务参数信息
 */
export interface StripEditingInfo {
    /**
     * 是否开启智能拆条。0为关闭，1为开启。其他非0非1值默认为0。
     */
    Switch: number;
    /**
     * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
     */
    CustomInfo?: string;
}
/**
 * 智能编辑任务参数信息
 */
export interface EditingInfo {
    /**
     * 视频标签识别任务参数，不填则不开启。
     */
    TagEditingInfo?: TagEditingInfo;
    /**
     * 视频分类识别任务参数，不填则不开启。
     */
    ClassificationEditingInfo?: ClassificationEditingInfo;
    /**
     * 智能拆条任务参数，不填则不开启。
     */
    StripEditingInfo?: StripEditingInfo;
    /**
     * 智能集锦任务参数，不填则不开启。
     */
    HighlightsEditingInfo?: HighlightsEditingInfo;
    /**
     * 智能封面任务参数，不填则不开启。
     */
    CoverEditingInfo?: CoverEditingInfo;
    /**
     * 片头片尾识别任务参数，不填则不开启。
     */
    OpeningEndingEditingInfo?: OpeningEndingEditingInfo;
}
/**
 * CreateEditingTask请求参数结构体
 */
export interface CreateEditingTaskRequest {
    /**
     * 智能编辑任务参数。
     */
    EditingInfo: EditingInfo;
    /**
     * 视频源信息。
     */
    DownInfo: DownInfo;
    /**
     * 结果存储信息。对于包含智能拆条、智能集锦或者智能封面的任务必选。
     */
    SaveInfo?: SaveInfo;
    /**
     * 任务结果回调地址信息。
     */
    CallbackInfo?: CallbackInfo;
}
/**
 * 智能集锦结果信息
 */
export interface HighlightsTaskResult {
    /**
        * 编辑任务状态。
  1：执行中；2：成功；3：失败。
        */
    Status: number;
    /**
        * 编辑任务失败错误码。
  0：成功；其他值：失败。
        */
    ErrCode: number;
    /**
     * 编辑任务失败错误描述。
     */
    ErrMsg: string;
    /**
        * 智能集锦结果集。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ItemSet: Array<HighlightsTaskResultItem>;
}
/**
 * 片头片尾识别结果信息
 */
export interface OpeningEndingTaskResult {
    /**
        * 编辑任务状态。
  1：执行中；2：成功；3：失败。
        */
    Status: number;
    /**
        * 编辑任务失败错误码。
  0：成功；其他值：失败。
        */
    ErrCode: number;
    /**
     * 编辑任务失败错误描述。
     */
    ErrMsg: string;
    /**
        * 片头片尾识别结果项。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Item: OpeningEndingTaskResultItem;
}
/**
 * DescribeEditingTaskResult返回参数结构体
 */
export interface DescribeEditingTaskResultResponse {
    /**
     * 编辑任务结果信息。
     */
    TaskResult?: EditingTaskResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateEditingTask返回参数结构体
 */
export interface CreateEditingTaskResponse {
    /**
     * 编辑任务 ID，可以通过该 ID 查询任务状态。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务视频Url形式下载信息。
 */
export interface UrlInfo {
    /**
        * 视频 URL。音视频支持mp4、ts等格式；直播流支持flv、rtmp格式。
  注意：目前智能编辑还不支持直播流场景。
        */
    Url: string;
    /**
        * 视频地址格式，可选值：
  0：音视频 ;
  1：直播流。
  默认为0。其他非0非1值默认为0。
        */
    Format?: number;
    /**
     * 指定请求资源时，HTTP头部host的值。
     */
    Host?: string;
}
/**
 * 视频分类识别结果项
 */
export interface ClassificationTaskResultItem {
    /**
     * 分类名称。
     */
    Classification: string;
    /**
     * 置信度，取值范围是 0 到 100。
     */
    Confidence: number;
}
/**
 * 智能识别任务结果信息
 */
export interface EditingTaskResult {
    /**
     * 编辑任务 ID。
     */
    TaskId: string;
    /**
        * 编辑任务状态。
  1：执行中；2：已完成。
        */
    Status: number;
    /**
        * 视频标签识别结果。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TagTaskResult: TagTaskResult;
    /**
        * 视频分类识别结果。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ClassificationTaskResult: ClassificationTaskResult;
    /**
        * 智能拆条结果。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    StripTaskResult: StripTaskResult;
    /**
        * 智能集锦结果。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    HighlightsTaskResult: HighlightsTaskResult;
    /**
        * 智能封面结果。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    CoverTaskResult: CoverTaskResult;
    /**
        * 片头片尾识别结果。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    OpeningEndingTaskResult: OpeningEndingTaskResult;
}
/**
 * 智能拆条结果信息
 */
export interface StripTaskResult {
    /**
        * 编辑任务状态。
  1：执行中；2：成功；3：失败。
        */
    Status: number;
    /**
        * 编辑任务失败错误码。
  0：成功；其他值：失败。
        */
    ErrCode: number;
    /**
     * 编辑任务失败错误描述。
     */
    ErrMsg: string;
    /**
        * 智能拆条结果集。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ItemSet: Array<StripTaskResultItem>;
}
/**
 * 智能集锦任务参数信息
 */
export interface HighlightsEditingInfo {
    /**
     * 是否开启智能集锦。0为关闭，1为开启。其他非0非1值默认为0。
     */
    Switch: number;
    /**
     * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
     */
    CustomInfo?: string;
}
/**
 * 视频分类识别结果信息
 */
export interface ClassificationTaskResult {
    /**
        * 编辑任务状态。
  1：执行中；2：成功；3：失败。
        */
    Status: number;
    /**
        * 编辑任务失败错误码。
  0：成功；其他值：失败。
        */
    ErrCode: number;
    /**
     * 编辑任务失败错误描述。
     */
    ErrMsg: string;
    /**
        * 视频分类识别结果集。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ItemSet: Array<ClassificationTaskResultItem>;
}
/**
 * 智能集锦结果项
 */
export interface HighlightsTaskResultItem {
    /**
     * 智能集锦地址。
     */
    HighlightUrl: string;
    /**
     * 智能集锦封面地址。
     */
    CovImgUrl: string;
    /**
     * 置信度，取值范围是 0 到 100。
     */
    Confidence: number;
    /**
     * 智能集锦持续时间，单位：秒。
     */
    Duration: number;
    /**
     * 智能集锦子片段结果集，集锦片段由这些子片段拼接生成。
     */
    SegmentSet: Array<HighlightsTaskResultItemSegment>;
}
/**
 * 智能集锦结果片段
 */
export interface HighlightsTaskResultItemSegment {
    /**
     * 置信度，取值范围是 0 到 100。
     */
    Confidence: number;
    /**
     * 集锦片段起始的偏移时间，单位：秒。
     */
    StartTimeOffset: number;
    /**
     * 集锦片段终止的偏移时间，单位：秒。
     */
    EndTimeOffset: number;
}
/**
 * 智能封面任务参数信息
 */
export interface CoverEditingInfo {
    /**
     * 是否开启智能封面。0为关闭，1为开启。其他非0非1值默认为0。
     */
    Switch: number;
    /**
     * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
     */
    CustomInfo?: string;
}
/**
 * 任务结果回调地址信息
 */
export interface CallbackInfo {
    /**
     * 回调URL。
     */
    Url: string;
}
/**
 * 片头片尾识别任务参数信息
 */
export interface OpeningEndingEditingInfo {
    /**
     * 是否开启片头片尾识别。0为关闭，1为开启。其他非0非1值默认为0。
     */
    Switch: number;
    /**
     * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
     */
    CustomInfo?: string;
}
/**
 * 智能封面结果信息
 */
export interface CoverTaskResult {
    /**
        * 编辑任务状态。
  1：执行中；2：成功；3：失败。
        */
    Status: number;
    /**
        * 编辑任务失败错误码。
  0：成功；其他值：失败。
        */
    ErrCode: number;
    /**
     * 编辑任务失败错误描述。
     */
    ErrMsg: string;
    /**
        * 智能封面结果集。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ItemSet: Array<CoverTaskResultItem>;
}
