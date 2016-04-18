<?php

namespace NextTopIcon\App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'sex', 'birthdate', 'info', 'name', 'alias', 'email', 'password', 'location', 'corporate_title', 'corporate',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'birthdate',
    ];

    /**
     * Get the profile image associated with this user
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function profileImage(){
        return $this->hasOne('NextTopIcon\App\ProfileImage');
    }

    /**
     * Get the cover image associated with this user
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function coverImage(){
        return $this->hasOne('NextTopIcon\App\CoverImage');
    }

    /**
     * Get all bookmarks targeting this user
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function bookmarksToMe(){
        return $this->morphMany('NextTopIcon\App\Bookmark', "bookmarkable");
    }

    /**
     * Get all bookmarks owned by this user
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function bookmarksFromMe(){
        return $this->hasMany('NextTopIcon\App\Bookmark');
    }

    /**
     * Get all users watching this user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function watchers(){
        return $this->belongsToMany(static::class, "watchers", "watched_id", "watcher_id");
    }

    /**
     * Get all users this user is watching
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function watching(){
        return $this->belongsToMany(static::class, "watchers", "watcher_id", "watched_id");
    }

    /**
     * Constrain query using the 'alias' field
     *
     * @param $query
     * @param $alias
     */
    public function scopeByAlias($query, $alias){
        $query->where("alias", $alias);
    }

    /**
     * Constrain query using the 'permanent link' fields
     *
     * @param $query
     * @param $left
     * @param $right
     */
    public function scopeByPermaLink($query, $left, $right){
        $query->where("perma_l", $left)->where("perma_r", $right);
    }
}
