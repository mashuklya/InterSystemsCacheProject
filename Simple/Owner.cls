Class Simple.Owner Extends (%Persistent, %Populate, %Library.DynamicAbstractObject)
{
/// Имя
Property Name As %String;

/// Имя
Property Book As Book;





Storage Default
{
<Data name="OwnerDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Name</Value>
</Value>
<Value name="3">
<Value>Book</Value>
</Value>
</Data>
<DataLocation>^Simple.OwnerD</DataLocation>
<DefaultData>OwnerDefaultData</DefaultData>
<IdLocation>^Simple.OwnerD</IdLocation>
<IndexLocation>^Simple.OwnerI</IndexLocation>
<StreamLocation>^Simple.OwnerS</StreamLocation>
<Type>%Library.CacheStorage</Type>
}

}
