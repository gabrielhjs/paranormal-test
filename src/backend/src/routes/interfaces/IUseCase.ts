interface IUseCaseResponse<IDtoResponse> {
  data?: IDtoResponse
  error: boolean | string
}


interface IUseCase<IDtoRequest, IDtoResponse> {
  execute(data: IDtoRequest): Promise<IUseCaseResponse<IDtoResponse>>
}


export { IUseCaseResponse, IUseCase }
