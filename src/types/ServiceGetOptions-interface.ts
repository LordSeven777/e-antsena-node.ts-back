// Interface for the common options for the get operations in services
interface ServiceGetOptions {
    search?: string;
    sortBy?: string;
    order?: "asc" | "desc";
    groupBy?: string;
}

export default ServiceGetOptions;