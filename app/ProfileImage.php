<?php

namespace NextTopIcon\App;

use Illuminate\Database\Eloquent\Model;

class ProfileImage extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'left', 'right', 'meta', 'ext', 'width', 'height', 'x', 'y',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'id',
    ];

    /**
     * Get the owner of the profile image
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(){
        return $this->belongsTo('App\User');
    }
}
