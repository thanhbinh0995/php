<?php 
	/**
	* 
	*/
	class Page
	{
		protected $id = null;
		protected $creatorId = null;
		protected $title = null;
		protected $content = null;
		protected $dateUpdate = null;
		function __construct(argument)
		{
			# code...
		}
	
	    /**
	     * Gets the value of id.
	     *
	     * @return mixed
	     */
	    public function getId()
	    {
	        return $this->id;
	    }

	    /**
	     * Sets the value of id.
	     *
	     * @param mixed $id the id
	     *
	     * @return self
	     */
	    protected function setId($id)
	    {
	        $this->id = $id;

	        return $this;
	    }

	    /**
	     * Gets the value of creatorId.
	     *
	     * @return mixed
	     */
	    public function getCreatorId()
	    {
	        return $this->creatorId;
	    }

	    /**
	     * Sets the value of creatorId.
	     *
	     * @param mixed $creatorId the creator id
	     *
	     * @return self
	     */
	    protected function setCreatorId($creatorId)
	    {
	        $this->creatorId = $creatorId;

	        return $this;
	    }

	    /**
	     * Gets the value of title.
	     *
	     * @return mixed
	     */
	    public function getTitle()
	    {
	        return $this->title;
	    }

	    /**
	     * Sets the value of title.
	     *
	     * @param mixed $title the title
	     *
	     * @return self
	     */
	    protected function setTitle($title)
	    {
	        $this->title = $title;

	        return $this;
	    }

	    /**
	     * Gets the value of content.
	     *
	     * @return mixed
	     */
	    public function getContent()
	    {
	        return $this->content;
	    }

	    /**
	     * Sets the value of content.
	     *
	     * @param mixed $content the content
	     *
	     * @return self
	     */
	    protected function setContent($content)
	    {
	        $this->content = $content;

	        return $this;
	    }

	    /**
	     * Gets the value of dateUpdate.
	     *
	     * @return mixed
	     */
	    public function getDateUpdate()
	    {
	        return $this->dateUpdate;
	    }

	    /**
	     * Sets the value of dateUpdate.
	     *
	     * @param mixed $dateUpdate the date update
	     *
	     * @return self
	     */
	    protected function setDateUpdate($dateUpdate)
	    {
	        $this->dateUpdate = $dateUpdate;

	        return $this;
	    }
	}

?>