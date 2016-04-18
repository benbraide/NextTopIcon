<?php

namespace NextTopIcon\App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
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
        'imageable_id', 'imageable_type',
    ];

    /**
     * Get the owner of the image
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function imageable()
    {
        return $this->morphTo();
    }
}
