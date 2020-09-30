import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { CheckDomainResponse, DescribeDomainPriceListResponse, CheckDomainRequest, DescribeDomainPriceListRequest } from "./domain_models";
/**
 * domain client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 按照域名后缀获取对应的价格列表
     */
    DescribeDomainPriceList(req: DescribeDomainPriceListRequest, cb?: (error: string, rep: DescribeDomainPriceListResponse) => void): Promise<DescribeDomainPriceListResponse>;
    /**
     * 检查域名是否可以注册。
     */
    CheckDomain(req: CheckDomainRequest, cb?: (error: string, rep: CheckDomainResponse) => void): Promise<CheckDomainResponse>;
}
