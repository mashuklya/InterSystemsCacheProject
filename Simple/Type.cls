Class Simple.Type Extends (%Persistent, %Populate, %Library.DynamicAbstractObject)
{
/// Имя
Property Name As %String [ Required ];
Storage Default
{
<Data name="TypeDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Name</Value>
</Value>
</Data>
<DataLocation>^Simple.TypeD</DataLocation>
<DefaultData>TypeDefaultData</DefaultData>
<IdLocation>^Simple.TypeD</IdLocation>
<IndexLocation>^Simple.TypeI</IndexLocation>
<StreamLocation>^Simple.TypeS</StreamLocation>
<Type>%Library.CacheStorage</Type>
}

}
