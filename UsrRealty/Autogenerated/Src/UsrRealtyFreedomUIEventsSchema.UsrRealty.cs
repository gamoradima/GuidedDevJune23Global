namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyFreedomUIEventsSchema

	/// <exclude/>
	public class UsrRealtyFreedomUIEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyFreedomUIEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyFreedomUIEventsSchema(UsrRealtyFreedomUIEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("6e945485-01e9-4c76-9b4f-b37a83ae752a");
			Name = "UsrRealtyFreedomUIEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("8c85e965-47c1-419b-b579-085b3faf58e5");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,107,227,48,16,189,23,250,31,6,179,7,27,130,104,175,237,110,97,147,166,75,160,116,151,198,233,165,244,160,200,19,87,69,31,70,146,211,205,46,253,239,59,178,28,226,58,93,232,92,100,141,222,188,153,247,60,134,107,244,13,23,8,37,58,199,189,221,4,54,179,102,35,235,214,241,32,173,57,61,249,123,122,2,20,173,151,166,134,229,206,7,212,151,195,212,176,80,107,107,254,251,232,144,205,77,144,65,162,255,12,134,205,183,104,194,30,250,216,165,119,93,238,86,210,16,6,93,190,20,207,168,249,29,105,128,111,144,173,188,187,71,174,194,46,43,158,82,81,211,174,149,20,32,20,247,30,210,219,7,52,112,1,83,238,241,131,151,196,210,27,48,32,180,91,26,89,86,8,91,43,43,248,105,22,198,163,11,164,37,183,235,23,20,1,60,154,10,221,4,18,231,20,55,36,172,99,254,238,106,15,88,28,24,7,228,49,214,52,8,27,18,238,153,176,184,124,143,76,212,224,58,85,36,63,79,137,34,21,140,192,21,10,169,185,130,198,73,17,189,74,85,236,7,134,114,215,96,53,179,170,213,230,129,171,22,191,246,208,171,60,250,249,43,226,87,203,235,108,220,93,110,32,79,100,87,112,126,182,143,226,61,104,164,45,6,178,133,159,113,35,80,97,69,115,4,215,34,49,31,227,124,112,113,53,104,57,61,175,177,68,221,40,30,226,228,6,95,225,214,10,174,228,31,190,86,184,236,112,121,175,103,69,174,209,246,26,250,5,180,186,236,30,189,109,157,32,144,117,196,50,57,110,19,227,176,55,55,14,177,178,122,181,72,155,151,77,32,59,106,229,89,103,211,194,151,214,78,101,157,110,89,193,74,219,143,82,124,66,15,233,72,9,118,99,157,230,33,31,233,164,198,231,236,108,250,229,200,246,24,225,217,217,215,206,135,249,111,129,77,84,186,175,31,195,223,14,215,254,147,142,183,127,40,162,248,72,244,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("b0acec2b-c11d-bec9-c8d7-aceef4d2bae4"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("8c85e965-47c1-419b-b579-085b3faf58e5"),
				CreatedInSchemaUId = new Guid("6e945485-01e9-4c76-9b4f-b37a83ae752a"),
				ModifiedInSchemaUId = new Guid("6e945485-01e9-4c76-9b4f-b37a83ae752a")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("6e945485-01e9-4c76-9b4f-b37a83ae752a"));
		}

		#endregion

	}

	#endregion

}

