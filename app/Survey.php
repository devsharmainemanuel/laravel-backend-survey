<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
    //

    public function questions()
    {
        return $this->hasMany(Question::class);
    }
    public function survey_types()
    {
        return $this->belongsTo(SurveyType::class);
    }
}