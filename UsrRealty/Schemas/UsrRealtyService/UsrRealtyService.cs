namespace Terrasoft.Configuration
{
	using System.ServiceModel;
	using System.ServiceModel.Web;
	using System.ServiceModel.Activation;
	using Terrasoft.Core.DB;
	using Terrasoft.Web.Common;
	using System;
	using System.Web.SessionState;
	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class RealtyService : BaseService, IReadOnlySessionState
	{
		[OperationContract]
		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]

		public decimal GetTotalAmountByTypeId(string realtyTypeId, string realtyOfferTypeId,
			string entityName)
		{
			if (string.IsNullOrEmpty(realtyTypeId) || string.IsNullOrEmpty(realtyOfferTypeId)
				|| string.IsNullOrEmpty(entityName))
			{
				return -1;
			}
			Select select = new Select(UserConnection)
				.Column(Func.Sum("UsrPriceUSD"))
				.From(entityName)
				.Where("UsrTypeId").IsEqual(Column.Parameter(new Guid(realtyTypeId)))
				.And("UsrOfferTypeId").IsEqual(Column.Parameter(new Guid(realtyOfferTypeId)))
				as Select;
			decimal result = select.ExecuteScalar<decimal>();
			return result;
		}
		[OperationContract]
		[WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]

		public string GetExample()
		{
			return "OK!";
		}

	}
}