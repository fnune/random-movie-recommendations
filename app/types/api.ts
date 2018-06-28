interface IndexSuccessResponse<Resource> {
  page: number
  results: Resource[]
  total_pages: number
  total_results: number
}

interface IndexFailureResponse {
  status_message: string
  status_code: number
}

type IndexResponse<Resource> = IndexSuccessResponse<Resource> | IndexFailureResponse
