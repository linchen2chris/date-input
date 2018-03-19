
# Table of Contents

1.  [date-input](#org485e673)
2.  [demo gif](#org82697c8)
    1.  [type your date](#org6400a48)
    2.  [valdate when you blur it](#orgfdca4de)
    3.  [validate when you type the full date](#orgba82c2e)
3.  [Have a try ?](#org85e35aa)
4.  [Import in your project](#org86516a5)
5.  [Roadmap](#orgce66d20)


<a id="org485e673"></a>

# date-input

a react component for date input, totally manual input field

available props

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">Props</td>
<td class="org-left">description</td>
<td class="org-left">option?</td>
<td class="org-left">comment</td>
</tr>


<tr>
<td class="org-left">value</td>
<td class="org-left">the initial date Value</td>
<td class="org-left">yes</td>
<td class="org-left">format "YYYY-MM-DD"</td>
</tr>


<tr>
<td class="org-left">onChange</td>
<td class="org-left">callback function</td>
<td class="org-left">yes</td>
<td class="org-left">call when you type in any field</td>
</tr>


<tr>
<td class="org-left">onBlur</td>
<td class="org-left">callback function</td>
<td class="org-left">yes</td>
<td class="org-left">call when you blur the whole DateInput</td>
</tr>


<tr>
<td class="org-left">minDate</td>
<td class="org-left">the min date</td>
<td class="org-left">yes</td>
<td class="org-left">if the date you fill in is before minDate will get error, format "YYYY-MM-DD"</td>
</tr>


<tr>
<td class="org-left">minDateError</td>
<td class="org-left">customized errorMessage</td>
<td class="org-left">yes</td>
<td class="org-left">default errorMessage is "The date is too early"</td>
</tr>


<tr>
<td class="org-left">maxDate</td>
<td class="org-left">the max date</td>
<td class="org-left">yes</td>
<td class="org-left">if the date you fill in is after maxDate will get error, format "YYYY-MM-DD"</td>
</tr>


<tr>
<td class="org-left">maxDateError</td>
<td class="org-left">customized errorMessage</td>
<td class="org-left">yes</td>
<td class="org-left">default errorMessage is "The date is too late"</td>
</tr>


<tr>
<td class="org-left">invalidError</td>
<td class="org-left">customized errorMessage</td>
<td class="org-left">yes</td>
<td class="org-left">default errorMessage is "please input a valid date"</td>
</tr>
</tbody>
</table>

currently, we have default validate rules

    let defaultRules = [
      {
        checker: value => moment(dateValue, 'YYYY-MM-DD', true).isValid(),
        errorMessage: this.props.invalidError || 'please input a valid date',
      },
      //only when you pass minDate
      {
        checker: (value, option) => moment(dateValue).isSameOrAfter(option.minDate),
        errorMessage: this.props.minDateError || 'The date is too early',
      },
      //only validate when you pass maxDate
      {
        checker: (value, option) => moment(dateValue).isSameOrBefore(option.maxDate),
        errorMessage: this.props.maxDateError || 'The date is too late',
      },
    ];

later, you will be allowed to pass customized rules, just following the format above.


<a id="org82697c8"></a>

# demo gif


<a id="org6400a48"></a>

## type your date

![img](doc/dateInput.gif)


<a id="orgfdca4de"></a>

## valdate when you blur it

![img](doc/dateInput-validateOnBlur.gif)


<a id="orgba82c2e"></a>

## validate when you type the full date

![img](doc/dateInput-validateOnFinish.gif)


<a id="org85e35aa"></a>

# Have a try ?

    yarn install
    yarn storybook

then feel free to have a try


<a id="org86516a5"></a>

# Import in your project

    yarn add date-input

then date-input will appear in your package.json,

    import DateInput from 'date-input';

import this component in your source code


<a id="orgce66d20"></a>

# Roadmap

-   [X] add props minDate and maxDate which can be exactly date or relative date.
-   [] add more validate Rules for user to choose, like [isFutureDate, isPastDate]
-   [] allow user to pass into customized validate rules, error messages
-   [] support date format like MM/YYYY, which is useful like expire date of credit card
-   [] support customized style

