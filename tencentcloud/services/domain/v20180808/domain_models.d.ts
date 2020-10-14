/**
 * CheckDomain返回参数结构体
 */
export interface CheckDomainResponse {
    /**
      * 所查询域名名称
      */
    DomainName?: string;
    /**
      * 是否能够注册
      */
    Available?: boolean;
    /**
      * 不能注册原因
      */
    Reason?: string;
    /**
      * 是否是溢价词
      */
    Premium?: boolean;
    /**
      * 域名价格
      */
    Price?: number;
    /**
      * 是否是敏感词
      */
    BlackWord?: boolean;
    /**
      * 溢价词描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Describe?: string;
    /**
      * 溢价词的续费价格
注意：此字段可能返回 null，表示取不到有效值。
      */
    FeeRenew?: number;
    /**
      * 域名真实价格
注意：此字段可能返回 null，表示取不到有效值。
      */
    RealPrice?: number;
    /**
      * 溢价词的转入价格
注意：此字段可能返回 null，表示取不到有效值。
      */
    FeeTransfer?: number;
    /**
      * 溢价词的赎回价格
      */
    FeeRestore?: number;
    /**
      * 检测年限
      */
    Period?: number;
    /**
      * 是否支持北京备案  true 支持  false 不支持
      */
    RecordSupport?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDomainPriceList返回参数结构体
 */
export interface DescribeDomainPriceListResponse {
    /**
      * 域名价格列表
      */
    PriceList?: Array<PriceInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CheckDomain请求参数结构体
 */
export interface CheckDomainRequest {
    /**
      * 所查询域名名称
      */
    DomainName: string;
    /**
      * 年限
      */
    Period?: string;
}
/**
 * 域名价格信息
 */
export interface PriceInfo {
    /**
      * 域名后缀，例如.com
      */
    Tld: string;
    /**
      * 购买年限，范围[1-10]
      */
    Year: number;
    /**
      * 域名原价
      */
    Price: number;
    /**
      * 域名现价
      */
    RealPrice: number;
    /**
      * 商品的购买类型，新购，续费，赎回，转入，续费并转入
      */
    Operation: string;
}
/**
 * DescribeDomainPriceList请求参数结构体
 */
export interface DescribeDomainPriceListRequest {
    /**
      * 查询价格的后缀列表。默认则为全部后缀
      */
    TldList?: Array<string>;
    /**
      * 查询购买的年份，默认会列出所有年份的价格
      */
    Year?: Array<number>;
    /**
      * 域名的购买类型：new  新购，renew 续费，redem 赎回，tran 转入
      */
    Operation?: Array<string>;
}
