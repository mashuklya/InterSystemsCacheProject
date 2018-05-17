Class Simple.Book2Type Extends (%Persistent, %Populate, %Library.DynamicAbstractObject)
{
/// Имя
Property Book As Book;
Property Type As Type;
Index BookInd on Book;
Index TypeInd on Type;



Storage Default
{
<Data name="Book2TypeDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Book</Value>
</Value>
<Value name="3">
<Value>Type</Value>
</Value>
</Data>
<DataLocation>^Simple.Book2TypeD</DataLocation>
<DefaultData>Book2TypeDefaultData</DefaultData>
<IdLocation>^Simple.Book2TypeD</IdLocation>
<IndexLocation>^Simple.Book2TypeI</IndexLocation>
<StreamLocation>^Simple.Book2TypeS</StreamLocation>
<Type>%Library.CacheStorage</Type>
}

}
