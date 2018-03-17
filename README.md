
# Table of Contents

1.  [date-input](#org7c2842b)
2.  [demo gif](#orga12a94d)
    1.  [type your date](#org2ff6079)
    2.  [valdate when you blur it](#org6354731)
    3.  [validate when you type the full date](#orgd4b87a7)
3.  [Have a try ?](#org0de88e3)
4.  [Import in your project](#org4279f42)
5.  [Roadmap](#org8ecec38)


<a id="org7c2842b"></a>

# date-input

a react component for date input, totally manual input field


<a id="orga12a94d"></a>

# demo gif


<a id="org2ff6079"></a>

## type your date

![img](doc/dateInput.gif)


<a id="org6354731"></a>

## valdate when you blur it

![img](doc/dateInput-validateOnBlur.gif)


<a id="orgd4b87a7"></a>

## validate when you type the full date

![img](doc/dateInput-validateOnFinish.gif)


<a id="org0de88e3"></a>

# Have a try ?

    yarn install
    yarn storybook

then feel free to have a try


<a id="org4279f42"></a>

# Import in your project

    yarn add date-input

then date-input will appear in your package.json,

    import DateInput from 'date-input';

import this component in your source code


<a id="org8ecec38"></a>

# Roadmap

-   [] add props minDate and maxDate which can be exactly date or relative date.
-   [] add more validate Rules for user to choose, like [isFutureDate, isPastDate]
-   [] allow user to pass into customized validate rules, error messages
-   [] support date format like MM/YYYY, which is useful like expire date of credit card
-   [] support customized style

