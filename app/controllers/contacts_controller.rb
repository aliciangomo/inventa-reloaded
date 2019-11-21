class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    message_object = { name: params[:name], email: params[:email], message: params[:message] }
    @contact = Contact.new(message_object)
    @contact.request = request
    if @contact.deliver
      flash.now[:error] = nil
      redirect_to root_path, notice: 'Message sent successfully'
    else
      flash.now[:error] = 'Cannot send message'
      render :new
    end
  end
end
